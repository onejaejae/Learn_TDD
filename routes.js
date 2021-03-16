import express from "express";
import { createProduct } from "./controllers/product";

const productRouter = express.Router();

productRouter.post("/", createProduct);

export default productRouter;
