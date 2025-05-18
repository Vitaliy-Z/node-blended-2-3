import { Router } from 'express';
import {
  createProduct,
  getAllController,
  getByIDController,
} from '../controllers/products.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllController));
productsRouter.get('/:productID', ctrlWrapper(getByIDController));
productsRouter.post('/', ctrlWrapper(createProduct));

export default productsRouter;
