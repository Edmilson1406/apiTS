import {Request, Response} from 'express';
import { request } from 'http';
import { Product, productModel } from '../models/products';
import { badRequest, internalServerError } from '../services/util';

const insertProduct = (req: Request, res: Response) => {
    {
        const product = req.body;
        if(!product)
            return badRequest(res, "Produto inválido");
        if(!product.name)
            return badRequest(res, 'informe o nome do produto');
        if(!(parseFloat(product.price) > 0))
            return badRequest(res, "Informe o preço")
    }

    const product = req.body as Product;
    productModel.insertProduct(product)
        .then(product => {
            res.json({
                product
            })
        })
        .catch(err => internalServerError(res, err))
}

const listProduct = (req: Request, res: Response) => {
    productModel.listProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => internalServerError(res, err))
}

const searchProduct = (req: Request, res: Response) => {
    productModel.searchProducts(req.body.id)
        .then(produto => {
            res.json(produto)
        })
        .catch(err => internalServerError(res, err))
}

export const productController = {
    insertProduct,
    listProduct, 
    searchProduct
}