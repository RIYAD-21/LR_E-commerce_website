import {PGSQL} from "../config/db.js";

export const getCart = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await PGSQL `SELECT * FROM Cart WHERE user_id = ${user_id}`;
        if (result.length === 0) {
            return res.status(404).json({ success: false , message: "No products found" });
        }
        res.status(200).json({success: true, data: result});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const addToCart = async (req, res) => {
    const { user_id, product_id } = req.params;
    try {
        const result = await PGSQL `INSERT INTO Cart (user_id, product_id) VALUES (${user_id}, ${product_id})`;
        res.status(201).json({success: true, message: "Product added to cart successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const removeFromCart = async (req, res) => {
    const { user_id, product_id } = req.params;
    try {
        const result = await PGSQL `DELETE FROM Cart WHERE user_id = ${user_id} AND product_id = ${product_id}`;
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false , message: "Product not found in cart" });
        }
        res.status(200).json({success: true, message: "Product removed from cart successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const updateCart = async (req, res) => {
    const { user_id, product_id } = req.params;
    const { quantity } = req.body;
    try {
        const result = await PGSQL `UPDATE Cart SET quantity = ${quantity} WHERE user_id = ${user_id} AND product_id = ${product_id}`;
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false , message: "Product not found in cart" });
        }
        res.status(200).json({success: true, message: "Cart updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
