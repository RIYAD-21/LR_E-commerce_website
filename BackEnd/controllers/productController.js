import {PGSQL} from '../config/db.js';

/*Client functions */
export const getAllProducts = async (req, res) => {
    try {
       const result = await PGSQL ` SELECT * FROM Product`;
       console.log(result);
       if (result.length === 0) {
            return res.status(404).json({ success: false , message: "No products found" });
        }
       res.status(200).json({success: true, data: result});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const getProduct = async (req, res) => {
    console.log("Fetching product with ID:", req.params.id);
    const { id } = req.params;
    try {
        const result = await PGSQL `SELECT * FROM Product WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ success: false , message: "No products found" });
        }
        console.log("Product found:", result[0]);
        res.status(200).json({success: true, data: result[0]});
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

/*Admin functions*/
export const createProduct = async (req, res) => {
    const {name , price} = req.body;
    try{
        const result = await PGSQL `SELECT * FROM Product WHERE name = ${name}`;
        if (result.length > 0) {
            return res.status(409).json({ success: false, message: "Product already exists" });
        }
        if (!name || !price) {
            return res.status(400).json({ success: false, message: "Name and price are required" });
        }
        await PGSQL `INSERT INTO Product (name, price) VALUES (${name}, ${price})`;
        res.status(201).json({success: true, message: "Product created successfully" });
    }catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
}

export const updateProduct = async (req, res) => {
    const {name , price} = req.body;
    const { id } = req.params;
    try {
        const result = await PGSQL `UPDATE Product 
                                    SET name = ${name}, price = ${price} 
                                    WHERE id = ${id}
                                    RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ success: false , message: "Product not found" });
        }
        res.status(200).json({success:true, message: "Product updated successfully", data: result[0]});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await PGSQL `DELETE FROM Product WHERE id = ${id}`;
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}