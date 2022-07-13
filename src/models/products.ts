const db = require('../services/db')


export type Product = {
    id: number;
    name: string;
    price: number
}

const insertProduct = async (product: Product) => {
    //console.log(db)
    if (!db._connected) {
        await db.connect()
        console.log("entrando para conectar")
    }
    //await db.connect()
    console.log('chegou aqui')
    const queryInsert = `INSERT INTO product (name, price) VALUES($1, $2)`; 4
    await db.query(queryInsert, [product.name, product.price]);
    //await db.end();
    //await db.connect();
    const querySelect = `SELECT id FROM product WHERE name = $1`;
    let retorno = await db.query(querySelect, [product.name]);
    //await db.end()
    return retorno.rows[0].id;

    //await db.end();
    // const con = await db.end();
    //console.log(!!con)

}

const listProducts = async () => {
    if (!db._connected) {
        await db.connect()
        console.log("entrando para conectar")
    }

    const retorno = await db.query('SELECT * FROM product');

    return retorno.rows as Product[]
}

const searchProducts = async (id: number) => {
    console.log(id)
    if (!db._connected) {
        await db.connect()
        console.log("entrando para conectar")
    }

    const querySearch = 'SELECT name, price FROM product WHERE id = $1';
    let retorno = await db.query(querySearch, [id]);

    return retorno.rows
}

export const productModel = {
    insertProduct,
    listProducts,
    searchProducts
}