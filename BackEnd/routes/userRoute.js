import express from 'express';
import { getUserProfileController, updateUserProfileController } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/add/:user_id', getUserProfileController);
router.put('/update/:user_id', updateUserProfileController);

export default router;
