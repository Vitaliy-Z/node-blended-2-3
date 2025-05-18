import createHttpError from 'http-errors';
import {
  findAllProducts,
  findProductbyID,
  createProduct,
  updateProduct,
  removeProduct,
} from '../services/products.js';
import { json } from 'express';

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

export const createController = async (req, res) => {
  const newProduct = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: newProduct,
  });
};

export const updateController = async (req, res) => {
  const updatedProduct = await updateProduct(req.params.productID, req.body);

  if (updatedProduct === null) {
    throw new createHttpError(
      404,
      `Product with id ${req.params.productID} is not found`,
    );
  }

  res.status(200).json({
    status: 200,
    message: `Successfully patched a product with id ${req.params.productID}!`,
    data: updatedProduct,
  });
};

export const deleteController = async (req, res) => {
  const deletedProduct = await removeProduct(req.params.productID);

  if (deletedProduct === null) {
    throw createHttpError(
      404,
      `Product with id ${req.params.productID} not found`,
    );
  }

  res.status(204).end();
};
