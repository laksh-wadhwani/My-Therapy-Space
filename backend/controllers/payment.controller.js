import { stripe } from "../config/stripe.js"
import PaymentModel from "../models/Payment.js";

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
  try {
    const { userId, amount, status, paymentIntentId } = req.body;

    const payment = new PaymentModel({
      userId,
      amount,
      status,
      paymentIntentId,
    });

    await payment.save();

    res.status(201).json({ message: "Payment saved successfully", payment });
  } catch (error) {
    console.log("Getting error in saving payment: ",error)
    return res.status(500).json({ error: "Internal Server Error" });
  }
};