import express from 'express';
import {  getCartController as getCart,
    addItemController as addItem,
    deleteItemController as deleteItem,
    increaseItemQuantityController as increaseItemQuantity,
    decreaseItemQuantityController as decreaseItemQuantity

 } from '../controllers/cart.controller.js';

const router = express.Router();

router.route("/").get(getCart);

router.route("/add").post(addItem);

router.route("/delete").delete(deleteItem);

router.route("/increment").put(increaseItemQuantity);

router.route("/decrement").put(decreaseItemQuantity);

export default router;