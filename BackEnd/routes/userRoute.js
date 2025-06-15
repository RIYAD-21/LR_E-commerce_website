import express from 'express';
import { getUserProfileController, updateUserProfileController } from '../controllers/user.controller.js';
<<<<<<< HEAD
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/add',authMiddleware, getUserProfileController);
router.put('/update',authMiddleware, updateUserProfileController);
=======

const router = express.Router();

router.get('/add/:user_id', getUserProfileController);
router.put('/update/:user_id', updateUserProfileController);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

export default router;
