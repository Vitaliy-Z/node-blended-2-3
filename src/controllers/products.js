import createHttpError from 'http-errors';
import { findAllProducts, findProductbyID } from '../services/products.js';

export const getAllController = async (req, res) => {
  const products = await findAllProducts();

  res.status(200).json({
    status: 200,
    message:
      products.length > 0
        ? 'Successfully found products!'
        : 'Products is empty',
    data: products,
  });
};

export const getByIDController = async (req, res) => {
  const { productID } = req.params;

  const product = await findProductbyID(productID);

  if (product === null) {
    throw createHttpError(404, `Product with id ${productID} not found`);
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productID}!`,
    data: product,
  });
};

export const createProduct = async (req, res) => {
  console.log(' req:', req.body);

  const newProduct = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: newProduct,
  });
};
