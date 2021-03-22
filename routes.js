import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./controllers/product";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:productId", getProductById);

productRouter.post("/", createProduct);

productRouter.put("/:productId", updateProduct);

productRouter.delete("/:productId", deleteProduct);

export default productRouter;
