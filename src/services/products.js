import { productModel } from '../db/model/products.js';

export const findAllProducts = () => productModel.find();

export const findProductbyID = (id) => productModel.findById(id);

export const createProduct = (data) => productModel.create(data);

export const updateProduct = (id, data) =>
  productModel.findByIdAndUpdate(id, data, { new: true });

export const removeProduct = (id) => productModel.findByIdAndDelete(id);
