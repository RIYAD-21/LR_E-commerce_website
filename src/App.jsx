import NavBar1 from "./homePageComp/NavBar1.jsx"
import HomePage from "./homePageComp/HomePage.jsx"
import ProductContainer from "./productContainer.jsx"
import Footer from "./footer"
import AdsSpace from "./homePageComp/AdsSpace.jsx"
import LogIn from "./registrationForm/LogIn.jsx"
import Register from "./registrationForm/Register.jsx"
import NavBar2 from "./productDetail/NavBar2.jsx"
import ProductView from "./productDetail/productView.jsx"
import React from 'react'

function App() {

  return (
    <>
      <NavBar2 />
      <ProductView />
      <Footer></Footer>
    </>
  )
}

export default App
