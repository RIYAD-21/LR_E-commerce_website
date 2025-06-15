import {PGSQL} from '../config/db.js';

const getAllProducts = async () => {
    try {
        const products = await PGSQL.query('SELECT * FROM product');
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const createProduct = async ({ name, price, description, image_url }) => {
  const { rows: product } = await PGSQL.query(
    "INSERT INTO products(name, price, description, image_url) VALUES($1, $2, $3, $4) returning *",
    [name, price, description, image_url]
  );
  return product[0];
};

const getProduct = async ({ id }) => {
  const product = await PGSQL.query(
    `SELECT * FROM product WHERE product_id = $1`,
    [id]
  );
  return product[0];
};

const getProductByCategory = async ({ category }) => {
  const product  = await PGSQL.query(
    `select * from product
        where product.categorie ILIKE '%${category}%'
        `,
  );
  return product;
};

const getProductByName = async ({ name }) => {
  const product  = await PGSQL.query(
    `select * from product
        where product.name ILIKE '%${name}%'
        `,
  );
  return product[0];
};

const updateProduct = async ({ name, price, description, image_url, id }) => {
  const { rows: product } = await PGSQL.query(
    "UPDATE products set name = $1, price = $2, description = $3 image_url = $4 where product_id = $5 returning *",
    [name, price, description, image_url, id]
  );
  return product[0];
};

const deleteProduct = async ({ id }) => {
  const { rows } = await PGSQL.query(
    "DELETE FROM products where product_id = $1 returning *",
    [id]
  );
  return rows[0];
};

export {
  getAllProducts,
  createProduct,
  getProduct,
  getProductByCategory,
  getProductByName,
  updateProduct,
  deleteProduct
};