import {
    getCart,
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    emptyCart
} from '../services/cart.service.js';

const getCartController = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await getCart(userId);
        res.status(200).json({ success: true, data: cart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const addItemController = async (req, res) => {
    const { cart_id ,  product_id} = req.params;
    const { quantity } = req.body;
    try {
        const updatedCart = await addItem({ cart_id, product_id, quantity });
        res.status(200).json({ success: true, data: updatedCart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const deleteItemController = async (req, res) => {
    const { cart_id, product_id } = req.params;
    try {
        const deletedItem = await deleteItem({ cart_id, product_id });
        res.status(200).json({ success: true, data: deletedItem });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const increaseItemQuantityController = async (req, res) => {
    const { cart_id, product_id } = req.params;
    try {
        const updatedCart = await increaseItemQuantity({ cart_id, product_id });
        res.status(200).json({ success: true, data: updatedCart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const decreaseItemQuantityController = async (req, res) => {
    const { cart_id, product_id } = req.params;
    try {
        const updatedCart = await decreaseItemQuantity({ cart_id, product_id });
        res.status(200).json({ success: true, data: updatedCart });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const emptyCartController = async (req, res) => {
    const { cart_id } = req.params;
    try {
        await emptyCart(cart_id);
        res.status(200).json({ success: true, message: "Cart emptied successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export {
    getCartController,
    addItemController,
    deleteItemController,
    increaseItemQuantityController,
    decreaseItemQuantityController,
    emptyCartController
};