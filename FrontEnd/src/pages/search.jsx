import React from 'react';
import SideBar from '../components/afterLogIn/sideBar';
import {useProduct} from '../context/productContext';
import ProductCard from '../components/productCard.jsx';

export default function SearchPage(){
    const { products } = useProduct();

    return (
        <div className="searchPage">
            <SideBar />
            <div className="searchResults">
                <h1>Search Results</h1>
                <div>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="productCard">
                                {/* <ProductCard product={product} /> */}
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>
        </div>
    )
}
