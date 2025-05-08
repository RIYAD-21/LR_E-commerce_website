import express from 'express';
import { addToFavorites, getFavorites, removeFromFavorites } from '../controllers/favoritesController.js';

const router = express.Router();

router.get('/', getFavorites);
router.post('/:user_id/:product_id', addToFavorites);
router.delete('/:user_id/:product_id', removeFromFavorites);

export default router;