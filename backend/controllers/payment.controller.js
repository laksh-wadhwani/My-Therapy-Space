import { stripe } from "../config/stripe.js"
import CartModel from "../models/Cart.js";
import PaymentModel from "../models/Payment.js";
import mongoose from "mongoose";

export const createPaymentIntent = async(request, response) => {
    try {
        const { amount } = request.body

        const amountInCents = Math.round(amount * 100);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: "aud",
            automatic_payment_methods: { enabled: true }
        })

        response.status(201).json({client_secret: paymentIntent.client_secret})

    } catch (error) {
        console.log("Getting error in creating payment intent:", error)
        return response.status(500).json({error: "Internal Server"})
    }
}

export const savePayment = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { userId, amount, status, paymentIntentId, products } = req.body;

    for (const product of products) {
      const fieldName = product.type === "product" ? "productID" : "courseID";

      // Duplicate check
      const isAlreadyExist = await PaymentModel.findOne(
        { userId, [fieldName]: product.itemId },
        null,
        { session }
      );

      if (isAlreadyExist) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({
          error: `This ${product.type} has already been reserved by you`,
        });
      }

      // Save payment (divide amount by 100 because Stripe gives cents)
      const payment = new PaymentModel({
        userId,
        amount: amount / 100,
        status,
        paymentIntentId,
        [fieldName]: product.itemId,
      });

      await payment.save({ session });
    }

    // Clear the cart after successful payment
    await CartModel.deleteMany({ userID: userId }, { session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return res
      .status(201)
      .json({ message: "Payment has been done successfully" });
  } catch (error) {
    // Rollback on error
    await session.abortTransaction();
    session.endSession();

    console.log("Getting error in saving payment: ", error.message);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};