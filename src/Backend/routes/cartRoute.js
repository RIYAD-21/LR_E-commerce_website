import express from 'express';
import { addToCart, getCart, removeFromCart, updateCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/:user_id/:product_id', addToCart);
router.get('/',getCart );
router.delete('/:user_id/:product_id',removeFromCart);
router.put('/:user_id/:product_id',updateCart);

export default router;