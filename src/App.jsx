import NavBar1 from "./homePageComp/NavBar1.jsx"
import HomePage from "./homePageComp/HomePage.jsx"
import ProductContainer from "./productContainer.jsx"
import Footer from "./footer"
import AdsSpace from "./homePageComp/AdsSpace.jsx"
import LogIn from "./registrationForm/LogIn.jsx"
import Register from "./registrationForm/Register.jsx"
import React from 'react'

function App() {

  return (
    <>
      <NavBar1 />
      <HomePage />
      <ProductContainer />
      <AdsSpace />
      <Footer /> 
    </>
  )
}

export default App
