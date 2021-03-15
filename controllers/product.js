import Product from "../models/Product";

// eslint-disable-next-line import/prefer-default-export
export const createProduct = (req, res, next) => {
  const product = Product.create(req.body);
  res.status(201).json(product);
};
