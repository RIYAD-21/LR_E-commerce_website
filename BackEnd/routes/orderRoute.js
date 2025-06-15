import { getAllOrdersController, createOrderController , getOrderController} from "../controllers/order.controller";

const router = express.Router();

router.route("/").get(getAllOrdersController);
router.route("/create").post(createOrderController);
router.route("/:id").get(getOrderController);

export default router;
