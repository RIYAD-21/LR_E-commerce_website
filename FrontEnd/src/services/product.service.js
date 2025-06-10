import API from "../api/axios.config";

class ProductService {
  getProducts() {
    return API.get(`/products`);
  }
  getProduct(id) {
    return API.get(`/products/${id}`);
  }
  getProductByName(name) {
    return API.get(`/products/${name}`);
  }
}

export default new ProductService();
