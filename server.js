import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productRouter from "./routes";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("반갑습니다");
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
