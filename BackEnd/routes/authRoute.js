import express from 'express';
import {registerController , loginController,logout,refresh} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;