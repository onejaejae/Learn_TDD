import Product from "../models/Product";
import "@babel/polyfill";

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(201).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    next(error);
  }
};
