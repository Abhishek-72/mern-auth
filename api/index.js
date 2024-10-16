import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB is connected to DATABASE"))
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on ${port}!`);
});
