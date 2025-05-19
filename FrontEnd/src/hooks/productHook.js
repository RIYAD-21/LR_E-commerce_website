import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:2103" : "";

export const useProduct = create((get,set) =>  {
    products= [];
    cart=[];
    favorites=[];
    product=null;
    loading=false;
    error=null;
    formData ={
        name: "",
        price: "",
        description: "",
        image: "",
    };

    setFormData = (formData) => {set({formData})};

    resetFormData = () => {set({formData: {name: "", price: "", description: "", image: ""}})};

    fetchProducts = async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            set({products: response.data.data});
        } catch (error) {
            set({ error: error.message});
            toast.error("Error fetching products");
        } finally {
            set({loading:false});
        }
    }

    fetchProduct = async (id) => {
        set({loading:true});
        try {
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            set({product: response.data.data});
        } catch (error) {
            set({ error: error.message});
            toast.error("Error fetching product");
        } finally {
            set({loading:false});
        }
    }

    addProduct = async () => {
        set({loading: true});
        try {
            await axios.post(`${BASE_URL}/products`,formData);
            resetFormData();
        } catch (error) {
            set({ error: error.message});
            toast.error("Error adding product");
        }finally{
            set({loading:false});
        }    
    }
})