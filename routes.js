import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
} from "./controllers/product";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);

productRouter.post("/", createProduct);

productRouter.put("/:productId", updateProduct);

export default productRouter;
