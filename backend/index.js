import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//Configuration
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())

//DB Connection
mongoose.connect(process.env.DB_URL)
.then(() => {
    app.listen(process.env.PORT, () => console.log("Server is connected and connected to MongoDB"))
})
.catch(error => {
    console.error("Unable to connect server and/or MongoDB", error)
})


//Default Route
app.get("/", async(request, response) => {
    response.json("Backend is working....")
})

app.use((req, res, next) => {
  res.setTimeout(5 * 60 * 1000); 
  next();
});

//Admin Routes
import adminRoutes from "./routes/admin.routes.js"
app.use("/api/admin", adminRoutes)

//Blog Routes
import blogRoutes from "./routes/blogs.routes.js"
app.use("/api/blogs", blogRoutes)

//Workshop Routes
import workshopRoutes from "./routes/workshop.routes.js"
app.use("/api/workshops", workshopRoutes)

//Products Routes
import productRoutes from "./routes/products.routes.js"
app.use("/api/products", productRoutes)

//Courses Routes
import courseRoutes from "./routes/course.routes.js"
app.use("/api/courses", courseRoutes)

// Queries Routes
import queryRoutes from "./routes/query.routes.js"
app.use("/api/queries", queryRoutes)

//Booking Routes
import bookingRoutes from "./routes/booking.routes.js"
app.use("/api/bookings", bookingRoutes)

//User Routes
import userRoutes from "./routes/user.routes.js"
app.use("/api/users", userRoutes)

//Cart Routes
import cartRoutes from "./routes/cart.routes.js"
app.use("/api/cart", cartRoutes)

//Payment Routes
import paymentRoutes from "./routes/payment.routes.js"
app.use("/api/payments", paymentRoutes)

//Team Member Routes
import teamRoutes from "./routes/team.routes.js"
app.use("/api/team", teamRoutes)