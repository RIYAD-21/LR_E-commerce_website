import express from 'express';
const auth = import('./authRoute.js');
const user = import('./userRoute.js');
const cart = import('./cartRoute.js');
const favorites = import('./favoritesRoute.js');
const products = import('./productRoute.js');
const orders = import('./orderRoute.js')

const router = express.Router();
console.log("Loading routes...");
<<<<<<< HEAD
router.use('/Auth', (await auth).default);
=======
router.use('/auth', (await auth).default);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
router.use('/user', (await user).default);
router.use('/cart', (await cart).default);
router.use('/favorites', (await favorites).default);
router.use('/products', (await products).default);
router.use('/orders',(await orders).default )
console.log("Routes loaded successfully.");



export default router;