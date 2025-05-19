import NavBar1 from "./components/homePageComp/NavBar1.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProductContainer from "./components/productContainer.jsx"
import Footer from "./components/footer.jsx"
import AdsSpace from "./components/homePageComp/AdsSpace.jsx"
import LogIn from "./components/registrationForm/LogIn.jsx"
import Register from "./components/registrationForm/Register.jsx"
import NavBar2 from "./components/productDetail/NavBar2.jsx"
import ProductView from "./components/productDetail/productView.jsx"
import ProductsContainer from "./components/productsCont/productsContainer.jsx"
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar1 />
              {/* <Footer /> */}
            </>
            }>
            <Route path="ads" element={<AdsSpace />}></Route>
            <Route path="home" element={<HomePage />} />
            <Route path="productContainer" element={<ProductContainer />} />
            <Route path="productsCont" element={<ProductsContainer />} ></Route>
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
