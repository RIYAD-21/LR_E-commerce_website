import React from 'react';
import './clientProfil.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

export default function AccountForm({ userData, setShowSettings, updateUserData }) {

    const { register, handleSubmit } = useForm({
    defaultValues: {
      fullname: userData?.fullname,
      email: userData?.email,
      username: userData?.username,
      address: userData?.address,
      country: userData?.country,
      city: userData?.city,
      state: userData?.state,
    },
  });
  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = async (data) => {
    setIsSaving(true);
    
    try {
      await updateUserData(data);
      setShowSettings(false);
      toast.success("Changes saved successfully!");
    } catch (error) {
      toast.error("Failed to save changes.");
    }finally {
      setIsSaving(false);
    }
  };

  return (
        <div className="account-form">
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    UserName:
                    <input type="text" name="name" {...register("username")} />
                </label>
                <label htmlFor="fullName">
                    Full Name:
                    <input type="text" name="fullName" {...register("fullname")} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" {...register("email")} />
                </label>
                <label htmlFor="address">
                    Address:
                    <input type="text" name="address" {...register("address")} />
                </label>
                <label htmlFor="city">
                    City:
                    <input type="text" name="city" {...register("city")} />
                </label>
                <label htmlFor="country">
                    Country:
                    <input type="text" name="country" {...register("country")} />
                </label>
                <label htmlFor="state">
                    State:
                    <input type="text" name="state" {...register("state")} />
                </label>
                <button type="submit">
                    {isSaving ? <PulseLoader color="#36d7b7" size={10} /> : 'Save Changes'}
                </button>
                <br />
                <button onClick={() => setShowSettings(false)}>Cancel</button>
            </form>
        </div>
  );
}