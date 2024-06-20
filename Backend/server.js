import express from "express";
import cors from "cors";
import { connectDB } from "./config/Db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"


// App config
const app = express();
const port = 3000; // Changed port number

// Middleware
app.use(express.json());
app.use(cors());


app.use("/images",express.static('uploads'))

app.use("/api/user", userRouter)

// Connect to MongoDB
connectDB();

// API endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
