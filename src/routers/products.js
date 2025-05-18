import { Router } from 'express';
import {
  getAllController,
  getByIDController,
  createController,
  updateController,
  deleteController,
} from '../controllers/products.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(getAllController));
productsRouter.get('/:productID', ctrlWrapper(getByIDController));
productsRouter.post('/', ctrlWrapper(createController));
productsRouter.patch('/:productID', ctrlWrapper(updateController));
productsRouter.delete('/:productID', ctrlWrapper(deleteController));

export default productsRouter;
