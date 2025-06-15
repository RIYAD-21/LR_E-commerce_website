<<<<<<< HEAD
import { getAllOrdersController, createOrderController , getOrderController} from "../controllers/order.controller.js";
import express from "express";
=======
import { getAllOrdersController, createOrderController , getOrderController} from "../controllers/order.controller";
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

const router = express.Router();

router.route("/").get(getAllOrdersController);
router.route("/create").post(createOrderController);
router.route("/:id").get(getOrderController);

export default router;
