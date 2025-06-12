import {PGSQL} from "../config/db.js";

const getCart = async (userId) => {
  const cart = await PGSQL  `SELECT products.*, cart_item.quantity, round((products.price * cart_item.quantity)::numeric, 2) as subtotal from users
      join cart on users.user_id = cart.user_id
      join cart_item on cart.id = cart_item.cart_id
      join products on products.product_id = cart_item.product_id
      where users.user_id = ${userId}
      `;

  return cart.rows;
};

const addItem = async ({ cart_id, product_id, quantity }) => {
  await PGSQL.query(
    `INSERT INTO cart_item(cart_id, product_id, quantity) 
         VALUES($1, $2, $3) ON CONFLICT (cart_id, product_id) 
        DO UPDATE set quantity = cart_item.quantity + 1 returning *`,
    [cart_id, product_id, quantity]
  );

  const results = await PGSQL.query(
    "Select products.*, cart_item.quantity, round((products.price * cart_item.quantity)::numeric, 2) as subtotal from cart_item join products on cart_item.product_id = products.product_id where cart_item.cart_id = $1",
    [cart_id]
  );

  return results.rows;
};

const deleteItem = async ({ cart_id, product_id }) => {
  const result = await PGSQL.query(
    "delete from cart_item where cart_id = $1 AND product_id = $2 returning *",
    [cart_id, product_id]
  );
  return result.rows[0];
};

const increaseItemQuantity = async ({ cart_id, product_id }) => {
  await PGSQL.query(
    "update cart_item set quantity = quantity + 1 where cart_item.cart_id = $1 and cart_item.product_id = $2",
    [cart_id, product_id]
  );

  const results = await PGSQL.query(
    `Select products.*, cart_item.quantity, 
       round((products.price * cart_item.quantity)::numeric, 2) as subtotal
       from cart_item join products 
       on cart_item.product_id = products.product_id 
       where cart_item.cart_id = $1
      `,
    [cart_id]
  );
  return results.rows;
};

const decreaseItemQuantity = async ({ cart_id, product_id }) => {
  await PGSQL.query(
    "update cart_item set quantity = quantity - 1 where cart_item.cart_id = $1 AND cart_item.product_id = $2 returning *",
    [cart_id, product_id]
  );

  const results = await PGSQL.query(
    "Select products.*, cart_item.quantity, round((products.price * cart_item.quantity)::numeric, 2) as subtotal from cart_item join products on cart_item.product_id = products.product_id where cart_item.cart_id = $1",
    [cart_id]
  );
  return results.rows;
};

const emptyCart = async (cartId) => {
  return await PGSQL.query("delete from cart_item where cart_id = $1", [cartId]);
};

export {
    getCart,
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    emptyCart
};