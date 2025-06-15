import { create } from "zustand";
import toast from "react-hot-toast";
import API from "../api/axios.config";


export const useCartStore = create((set,get)=>{
    loading:false;
    cartItems : [];
    error:null;

    getCart: async () => {
        set({loading:true});
        try {
            const response = await API.get(`/api/cart`)
            set({cartItems:response.data.data, error:null})
            get().cartItems
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
        
   }

   addToCart:async (cart_id) => {
        set({loading:true})
        try {
            await API.post(`/cart/add/:${cart_id}`)
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
            await API.delete(`/cart/delete/:${cart_id}/:${product_id}`)
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
            await API.post(`/cart/increment/:${cart_id}/:${product_id}`)
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
   }

   decrement: async (cart_id,product_id) => {
        set({loading:true})
        try {
            await API.post(`/cart/decrement/:${cart_id}/:${product_id}`)
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
   }
})