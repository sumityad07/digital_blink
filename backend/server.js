import express from "express"
import { config } from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./routes/user.js"
import cors from 'cors'

config()

const app = express()
app.use(cors({
  origin: "http://localhost:5174", // replace with your frontend URL
  credentials: true
}))

app.use(express.json())
app.use("/api",userRoutes)



// MongoDB
mongoose.connect(process.env.MONGO_URL, { dbName: 'Digital_Blink' })
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const port  = process.env.PORT

app.listen(port,()=>console.log(`server running on ${port}`)
)