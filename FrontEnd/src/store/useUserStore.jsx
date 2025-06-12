import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import API from "../api/axios.config.js";

export const useUserStore = create(
    (set, get) => ({
      isAuthenticated: false,
      userProfile: null,
      loading: true,

      login: (token, profile) => {
        localStorage.setItem("accessToken", token);
        set({ isAuthenticated: true, userProfile: profile });
        
      },

      logout: () => {
        localStorage.removeItem("accessToken");
        set({ isAuthenticated: false, userProfile: null });
      },

      updateProfile: (updatedProfile) => {
        set({ userProfile: updatedProfile });
      },

      checkAuth: async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          set({ loading: false });
          return;
        }

        try {
          const res = await API.get("/user/add");
          set({ userProfile: res.data, isAuthenticated: true });
        } catch (err) {
          localStorage.removeItem("accessToken");
          set({ isAuthenticated: false, userProfile: null });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        userProfile: state.userProfile,
      }),
    }
  
);
