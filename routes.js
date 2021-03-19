import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
} from "./controllers/product";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);

productRouter.post("/", createProduct);

export default productRouter;
