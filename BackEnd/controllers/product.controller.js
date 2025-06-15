import { getAllProducts,
  createProduct,
  getProduct,
  getProductByCategory,
  getProductByName,
  updateProduct,
  deleteProduct} from "../services/product.service.js";

const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts();
        if (!products || products.length === 0) {
            return res.status(404).json({ success: false, message: "No products found" });
        }
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const createProductController = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    try {
        const product = await createProduct({ name, description, price, category, image });
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getProductController = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProduct({ id });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getProductByCategoryController = async (req, res) => {
    const { category } = req.params;
    console.log("Category:", category);
    if (!category) {
        return res.status(400).json({ success: false, message: "Category is required" });
    }
    try {
        const products = await getProductByCategory({ category });
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error " });
    }
}

const getProductByNameController = async (req, res) => {
    const { name } = req.params;
    if (!name) {
        return res.status(400).json({ success: false, message: "Product name is required" });
    }
    try {
        const products = await getProductByName({ name });
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
} 

const updateProductController = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, image } = req.body;
    try {
        const product = await updateProduct({ id, name, description, price, category, image });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const deleteProductController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteProduct({ id });
        if (!result) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export {
    getAllProductsController,
    createProductController,
    getProductController,
    getProductByCategoryController,
    getProductByNameController,
    updateProductController,
    deleteProductController
};