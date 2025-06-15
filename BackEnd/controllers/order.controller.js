
import { getAllOrders,createOrder,getOrder  } from "../services/order.service.js";

const createOrderController = async (req, res) => {
    const { cartId, amount, itemTotal, userId, ref, paymentMethod } = req.body;
    try {
        const order = await createOrder({ cartId, amount, itemTotal, userId, ref, paymentMethod });
        res.status(201).json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getAllOrdersController = async (req, res) => {
    const { userId } = req.params;
    const { limit, offset } = req.query;
    try {
        const orders = await getAllOrders({ userId, limit: parseInt(limit), offset: parseInt(offset) });
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const getOrderController = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.query;
    try {
        const order = await getOrder({ id, userId });
        if (order.length === 0) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export {
    createOrderController,
    getAllOrdersController,
    getOrderController
};