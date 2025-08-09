import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

//Configuration
const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();

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

//Admin Routes
import adminRoutes from "./routes/admin.routes.js"
app.use("/api/admin", adminRoutes)