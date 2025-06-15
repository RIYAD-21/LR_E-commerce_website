import express from 'express';
<<<<<<< HEAD
import {registerController , loginController,logout,refresh} from '../controllers/auth.controller.js';
=======
import {registerController , loginController} from '../controllers/auth.controller.js';
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
<<<<<<< HEAD
router.post('/refresh', refresh);
router.post('/logout', logout);
=======
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

export default router;