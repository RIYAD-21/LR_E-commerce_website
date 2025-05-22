import React from 'react';
import { IoMenu } from "react-icons/io5";
import AdsSpace from "../components/homePageComp/AdsSpace.jsx"
import ProductsContainer from "../components/productsCont/productsContainer.jsx"
import CompaniesAds from '../components/homePageComp/companiesAds.jsx';

export default function HomePage() {
    return (
        <>
            <div className="homePage">
                <div className="firstCont">
                    <div className="searchBar">
                        <div className="searchBar__categories">
                            <IoMenu size="2.5em" color="white"/>
                        </div>  
                        
                    </div>
                    <div className="info">
                        <span>
                            <h1>Shop, Buy and Enjoy</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, voluptatibus.</p>
                            <button className="btn">Shop Now</button>
                        </span>
                        <img src="/cart-sales-photo.png" alt="cart" />
                    </div>
                </div>
                {/* <AdsSpace /> */}
                <ProductsContainer></ProductsContainer>
                <CompaniesAds></CompaniesAds>
            </div>
            
        </>
    )
}
