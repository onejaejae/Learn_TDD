import express from "express";
import { hello } from "./controllers/product";

const productRouter = express.Router();

productRouter.get("/", hello);

export default productRouter;
