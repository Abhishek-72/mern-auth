import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB is connected to DATABASE"))
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on ${port}!`);
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Creating middleware to handling error
app.use((err, req, res, next) => {
  // console.error("Error occurred:", err); // Log the error for debugging
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
