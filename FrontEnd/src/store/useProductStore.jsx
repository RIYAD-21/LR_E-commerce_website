import { create } from "zustand";
import toast from "react-hot-toast";
import API from "../api/axios.config";

<<<<<<< HEAD

=======
const BASE_URL = API.defaults.baseURL || "";
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,
<<<<<<< HEAD
  productsSearched:[],
=======

>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();
<<<<<<< HEAD
      await API.post(`/products`, formData);
=======
      await API.post(`${BASE_URL}/products`, formData);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");
    } catch (error) {
      console.log("Error in addProduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try {
<<<<<<< HEAD
      const response = await API.get(`/products`);
      console.log("Fetched products :", response.data.data);
      set({ products: [...response.data.data] });
      console.log("Products fetched successfully", get().products);
    } catch (err) {
      if (err.response?.status === 429) set({ error: "Rate limit exceeded", products: [] });
=======
      const response = await API.get(`${BASE_URL}/products`);
      console.log("Fetched products:", response.data.data);
      set({ products: response.data.data, error: null });
    } catch (err) {
      if (err.status == 429) set({ error: "Rate limit exceeded", products: [] });
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    console.log("deleteProduct function called", id);
    set({ loading: true });
    try {
<<<<<<< HEAD
      await API.delete(`/products/remove/id/:${id}`);
=======
      await API.delete(`${BASE_URL}/api/products/remove/id/:${id}`);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
      set((prev) => ({ products: prev.products.filter((product) => product.id !== id) }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("Error in deleteProduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

<<<<<<< HEAD
  fetchProductById: async (id) => {
    set({ loading: true });
    try {
      const response = await API.get(`/products/add/:${id}`);
=======
  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const response = await API.get(`${BASE_URL}/api/products/:${id}`);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
      set({
        currentProduct: response.data.data,
        formData: response.data.data, // pre-fill form with current product data
        error: null,
      });
<<<<<<< HEAD
      get().currentProduct;
=======
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
    } catch (error) {
      console.log("Error in fetchProduct function", error);
      set({ error: "Something went wrong", currentProduct: null });
    } finally {
      set({ loading: false });
    }
  },
<<<<<<< HEAD

  fetchProductsByName: async (name) => {
    set({ loading: true });
    
      try {
        const response = await API.get(`/products/add/name/:${name}`);
        set({ productsSearched:[...response.data.data] , error: null });
        get().productsSearched;
    } catch (err) {
        set({ error: "Something went wrong", currentProduct: null });
    } finally {
        set({ loading: false });
    }
    
  },

=======
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
  updateProduct: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
<<<<<<< HEAD
      const response = await API.put(`/products/update/id/:${id}`, formData);
=======
      const response = await API.put(`${BASE_URL}/api/products/update/id/:${id}`, formData);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
      set({ currentProduct: response.data.data });
      toast.success("Product updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error in updateProduct function", error);
    } finally {
      set({ loading: false });
    }
  },
}));