import NavBar1 from "./pages/homePageComp/NavBar1.jsx"
import HomePage from "./pages/homePageComp/HomePage.jsx"
import ProductContainer from "./productContainer.jsx"
import Footer from "./footer"
import AdsSpace from "./pages/homePageComp/AdsSpace.jsx"
import LogIn from "./pages/registrationForm/LogIn.jsx"
import Register from "./pages/registrationForm/Register.jsx"
import NavBar2 from "./pages/productDetail/NavBar2.jsx"
import React from 'react'
import SignIn from "./pages/Sign-in/Sign-in.jsx";
import SideBar from "./pages/Sign-in/Side-bar.jsx";
import Products from "./pages/Sign-in/Products.jsx";

function App() {

  return (
    <>
        <NavBar2/>
        <SignIn/>
        <SideBar/>
        <Products/>
    </>
  )
}

export default App
