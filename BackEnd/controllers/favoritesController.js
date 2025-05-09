import {PGSQL} from "../config/db.js";

export const getFavorites = async (req, res) => {
    try {
        const result = await PGSQL `SELECT * FROM Favorites`;
        if (result.length === 0) {
            return res.status(404).json({ success: false , message: "No products found" });
        }
        res.status(200).json({success: true, data: result});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const addToFavorites = async (req, res) => {
    const {product_id,user_id} = req.params;
    try {
        const result = await PGSQL `INSERT INTO Favorites (user_id, product_id) VALUES (${user_id}, ${product_id})`;
        res.status(201).json({success: true, message: "Product added to favorites successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const removeFromFavorites = async (req, res) => {
    const {product_id,user_id} = req.params;
    try {
        const result = await PGSQL `DELETE FROM Favorites WHERE user_id = ${user_id} AND product_id = ${product_id}`;
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false , message: "Product not found in favorites" });
        }
        res.status(200).json({success: true, message: "Product removed from favorites successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
