import Cart from "../components/cart/cart.jsx";
import ProfileSideBar from "../components/clientProfil/profileSideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function ClientDashboard() {
  return (
    <>
    <div className="flex">
      <ProfileSideBar />  
    </div>
    </>
    
  );
}