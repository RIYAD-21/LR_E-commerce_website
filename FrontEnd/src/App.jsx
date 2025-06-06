import NavBar1 from "./components/homePageComp/NavBar1.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProductContainer from "./components/productContainer.jsx"
import Footer from "./components/footer.jsx"
import AdsSpace from "./components/homePageComp/AdsSpace.jsx"
import LogIn from "./components/registrationForm/LogIn.jsx"
import Register from "./components/registrationForm/Register.jsx"
import NavBar2 from "./components/homePageComp/NavBar2.jsx"
import ProductView from "./components/productDetail/productView.jsx"
import CheckOut from "./components/checkOut&Payment/checkOut.jsx"
import ProductsContainer from "./components/productsCont/productsContainer.jsx"
import Cart from "./components/cart/cart.jsx"
import CompaniesAds from "./components/homePageComp/companiesAds.jsx"
import SideBar from "./components/afterLogIn/sideBar.jsx"
import ClientDashboard from "./pages/clientDashboard.jsx"
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={
            <>
              <NavBar2 />
              {/* <Footer /> */}
            </>
            }>
            <Route path="client" element={<ClientDashboard />} />
            <Route path="side" element={<SideBar/>}></Route>
            <Route path="check" element={<CheckOut/>}></Route>
            <Route path="ads" element={<AdsSpace />}></Route>
            <Route path="home" element={<HomePage />} />
            <Route path="productContainer" element={<ProductContainer />} />
            <Route path="productsCont" element={<ProductsContainer />} ></Route>
            <Route path="adsSpace" element={<AdsSpace />} />
            <Route path="productView" element={<ProductView />} />
            <Route path="cart" element={<Cart />}></Route>
            <Route path="comp" element={<CompaniesAds />}></Route> 
          </Route>
        </Routes> 
      </Router>
    </>
  )
}

export default App
