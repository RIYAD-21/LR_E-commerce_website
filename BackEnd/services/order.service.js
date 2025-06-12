import {PGSQL} from '../config/db.js';

const createOrder = async ({
  cartId,
  amount,
  itemTotal,
  userId,
  ref,
  paymentMethod,
}) => {
  const order = await PGSQL.query(
    "INSERT INTO orders(user_id, status, amount, total, ref, payment_method) VALUES($1, 'complete', $2, $3, $4, $5) returning *",
    [userId, amount, itemTotal, ref, paymentMethod]
  );

  await PGSQL.query(
    `
      INSERT INTO order_item(order_id,product_id, quantity) 
      SELECT $1, product_id, quantity from cart_item where cart_id = $2
      returning *
      `,
    [order[0].order_id, cartId]
  );
  return order[0];
};

const getAllOrders = async ({ userId, limit, offset }) => {
  const rowCount = await PGSQL.query(
    "SELECT COUNT(*) FROM orders WHERE orders.user_id = $1",
    [userId]
  );
  const orders = await PGSQL.query(
    `SELECT order_id, user_id, status, date::date, amount, total 
      from orders WHERE orders.user_id = $1 order by order_id desc limit $2 offset $3`,
    [userId, limit, offset]
  );
  return { items: orders.rows, total: rowCount };
};

const getOrder = async ({ id, userId }) => {
  const { rows: order } = await PGSQL.query(
    `SELECT products.*, order_item.quantity 
      from orders 
      join order_item
      on order_item.order_id = orders.order_id
      join products 
      on products.product_id = order_item.product_id 
      where orders.order_id = $1 AND orders.user_id = $2`,
    [id, userId]
  );
  return order;
};

export {
    createOrder,
    getOrder,
    getAllOrders
}