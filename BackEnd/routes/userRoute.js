import express from 'express';
import { getUserProfileController, updateUserProfileController } from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/add',authMiddleware, getUserProfileController);
router.put('/update',authMiddleware, updateUserProfileController);

export default router;
