import {Router} from 'express'
import { productController } from "../controllers/products";

const productRouter = Router();
productRouter.post('/', productController.insertProduct);
productRouter.get('/', productController.listProduct);
productRouter.get('/busca', productController.searchProduct);

export {
    productRouter
}