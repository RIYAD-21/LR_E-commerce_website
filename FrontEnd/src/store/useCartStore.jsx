import { create } from "zustand";
import toast from "react-hot-toast";
import API from "../api/axios.config";

<<<<<<< HEAD
=======
const BASE_URL = API.defaults.baseURL || "";
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

export const useCartStore = create((set,get)=>{
    loading:false;
    cartItems : [];
    error:null;

    getCart: async () => {
        set({loading:true});
        try {
<<<<<<< HEAD
            const response = await API.get(`/api/cart`)
            set({cartItems:response.data.data, error:null})
            get().cartItems
=======
            const response = await API.get(`${BASE_URL}/api/cart`)
            set({cartItems:response.data.data, error:null})
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
        
   }

   addToCart:async (cart_id) => {
        set({loading:true})
        try {
<<<<<<< HEAD
            await API.post(`/cart/add/:${cart_id}`)
=======
            await API.post(`${BASE_URL}/api/cart/add/:${cart_id}`)
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
            toast.success('Product added to cart')
        } catch (err) {
            set({error:err})
            toast.error("Something went wrong")
        }finally{
            set({loading:false})
        }
   }

   deleteFromCart : async(cart_id,product_id) =>{
        set({loading:true})
        try {
<<<<<<< HEAD
            await API.delete(`/cart/delete/:${cart_id}/:${product_id}`)
=======
            await API.delete(`${BASE_URL}/api/cart/delete/:${cart_id}/:${product_id}`)
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
            toast.success('Product deleted from cart')
        } catch (err) {
            set({error:err})
            toast.error("Something went wrong")
        }finally{
            set({loading:false})
        }
   }

   increment: async (cart_id,product_id) => {
        set({loading:true})
        try {
<<<<<<< HEAD
            await API.post(`/cart/increment/:${cart_id}/:${product_id}`)
=======
            await API.post(`${BASE_URL}/api/cart/increment/:${cart_id}/:${product_id}`)
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
   }

   decrement: async (cart_id,product_id) => {
        set({loading:true})
        try {
<<<<<<< HEAD
            await API.post(`/cart/decrement/:${cart_id}/:${product_id}`)
=======
            await API.post(`${BASE_URL}/api/cart/decrement/:${cart_id}/:${product_id}`)
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
   }
})