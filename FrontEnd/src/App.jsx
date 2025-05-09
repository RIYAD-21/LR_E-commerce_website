import NavBar1 from "./pages/homePageComp/NavBar1.jsx"
import HomePage from "./pages/homePageComp/HomePage.jsx"
import ProductContainer from "./pages/productContainer.jsx"
import Footer from "./pages/footer.jsx"
import AdsSpace from "./pages/homePageComp/AdsSpace.jsx"
import LogIn from "./pages/registrationForm/LogIn.jsx"
import Register from "./pages/registrationForm/Register.jsx"
import NavBar2 from "./pages/productDetail/NavBar2.jsx"
import ProductView from "./pages/productDetail/productView.jsx"
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/" element={
            <>
              <NavBar1 />
              <Footer />
            </>
            }>
            <Route path="home" element={<HomePage />} />
            <Route path="productContainer" element={<ProductContainer />} />
            <Route path="adsSpace" element={<AdsSpace />} />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
            <Route path="navBar2" element={<NavBar2 />} />
            <Route path="productView" element={<ProductView />} />
          </Route>
        </Routes> 
      </Router>
    </>
  )
}

export default App
