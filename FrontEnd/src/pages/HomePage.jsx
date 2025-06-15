import React from 'react';
import { IoMenu } from "react-icons/io5";
import SearchPage from './search.jsx';
import ProductsContainer from "../components/productsCont/productsContainer.jsx"
import CompaniesAds from '../components/homePageComp/companiesAds.jsx';
import AdditInfo from '../components/homePageComp/additInfo.jsx';
import ScrollBar from '../components/homePageComp/scrollBar.jsx';
import Footer from "../components/footer.jsx"
import { Link } from 'react-router-dom';

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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Quisquam, voluptatibus.</p>
                            <Link to="/search">
                                <button className="btn">Shop Now</button>
                            </Link>
                        </span>
                        <img src="/cart-sales-photo.png" alt="cart" />
                    </div>
                </div>
                {/* <AdsSpace /> */}
                <ScrollBar></ScrollBar>
                <div className='cont_margin'>
                    <ProductsContainer name="New features" />
                    <ProductsContainer name="For You" />
                </div>
                <div className='cont_margin'>
                    <CompaniesAds />
                </div>
                <div className='cont_margin'>
                    <ProductsContainer name="Most Liked" />
                </div>
                <div className='cont_margin block_animat'>
                    <AdditInfo />
                </div>
                
                <Footer></Footer>
            </div>
            
        </>
    )
}
