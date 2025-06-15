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


router.get("/", getAllProducts);
router.get("/add/id", getProductById); 
router.get("/add/name/:name", getProductByName); 
router.get("/add/category/:category", getProductByCategory);
router.post("/", createProduct);
router.put("/update/id/:id", updateProduct); 
router.delete("/remove/id/:id", deleteProduct); 

export default router;