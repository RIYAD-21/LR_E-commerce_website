import { create } from "zustand";
import toast from "react-hot-toast";
import API from "../api/axios.config";

export const useOrderStore = create((set,get)=>{
    loading:false;
    orders=[];
    currentOrder:null ;
    error:null;

    getOrders : async () => {
        set({loading:true});
        try {
            const response = await API.get(`${BASE_URL}/api/orders`)
            set({cartItems:response.data.data, error:null})
        } catch (err) {
            set({error:err})
        }finally{
            set({loading:false})
        }
        
   }

   getOrder : async (id) => {
    set({ loading: true });
    try {
      const response = await API.get(`${BASE_URL}/api/products/:${id}`);
      set({
        currentOrder : response.data.data,
        error: null,
      });
    } catch (error) {
      console.log("Error in fetchingOrder", error);
      set({ error: "Something went wrong", currentOrder: null });
    } finally {
      set({ loading: false });
    }
}

   addOrder:async (cart_id,userId) => {
        set({loading:true})
        try {
            await API.post(`${BASE_URL}/api/orders/create/:${cart_id}/:${userId}`)
            toast.success('order added successfully')
        } catch (err) {
            set({error:err})
            toast.error("Something went wrong")
        }finally{
            set({loading:false})
        }
   }
})