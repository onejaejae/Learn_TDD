import Product from "../models/Product";
import "@babel/polyfill";

// eslint-disable-next-line import/prefer-default-export
export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
