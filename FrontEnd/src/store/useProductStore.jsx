import { create } from "zustand";
import toast from "react-hot-toast";
import API from "../api/axios.config";


export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,
  productsSearched:[],
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
      await API.post(`/products`, formData);
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
      const response = await API.get(`/products`);
      console.log("Fetched products :", response.data.data);
      set({ products: [...response.data.data] });
      console.log("Products fetched successfully", get().products);
    } catch (err) {
      if (err.response?.status === 429) set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    console.log("deleteProduct function called", id);
    set({ loading: true });
    try {
      await API.delete(`/products/remove/id/:${id}`);
      set((prev) => ({ products: prev.products.filter((product) => product.id !== id) }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("Error in deleteProduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    try {
      const response = await API.get(`/products/add/:${id}`);
      set({
        currentProduct: response.data.data,
        formData: response.data.data, // pre-fill form with current product data
        error: null,
      });
      get().currentProduct;
    } catch (error) {
      console.log("Error in fetchProduct function", error);
      set({ error: "Something went wrong", currentProduct: null });
    } finally {
      set({ loading: false });
    }
  },

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

  updateProduct: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
      const response = await API.put(`/products/update/id/:${id}`, formData);
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