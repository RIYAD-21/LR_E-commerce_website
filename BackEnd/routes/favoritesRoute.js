import express from 'express';
import { addToFavorites, getFavorites, removeFromFavorites } from '../controllers/favorites.controller.js';

const router = express.Router();

router.get('/', getFavorites);
router.post('/add/:user_id/:product_id', addToFavorites);
router.delete('/remove/:user_id/:product_id', removeFromFavorites);

export default router;