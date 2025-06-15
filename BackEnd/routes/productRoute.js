import express from "express";
import {
    getAllProductsController as getAllProducts,
    createProductController as createProduct,
    getProductController as getProductById,
    getProductByCategoryController as getProductByCategory,
    getProductByNameController as getProductByName,
    updateProductController as updateProduct,
    deleteProductController as deleteProduct
} from "../controllers/product.controller.js";

const router = express.Router();

// Define routes with specific patterns
router.get("/", getAllProducts);
router.get("/add/id/:id", getProductById); // Prefix with "id" to avoid conflicts
router.get("/add/name/:name", getProductByName); // Prefix with "name"
router.get("/add/category/:category", getProductByCategory); // Prefix with "category"
router.post("/", createProduct);
router.put("/update/id/:id", updateProduct); // Prefix with "id"
router.delete("/remove/id/:id", deleteProduct); // Prefix with "id"

export default router;