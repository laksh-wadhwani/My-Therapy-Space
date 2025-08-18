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

//Admin Routes
import adminRoutes from "./routes/admin.routes.js"
app.use("/api/admin", adminRoutes)

//Blog Routes
import blogRoutes from "./routes/blogs.routes.js"
app.use("/api/blogs", blogRoutes)

//Workshop Routes
import workshopRoutes from "./routes/workshop.routes.js"
app.use("/api/workshops", workshopRoutes)