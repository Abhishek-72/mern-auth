import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
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
const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on ${port}!`);
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
