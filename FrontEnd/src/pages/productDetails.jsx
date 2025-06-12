import React from 'react';
import ProductView from '../components/productDetail/productView';
import ReviewForm from '../components/productDetail/reviewForm';
import ProductsContainer from '../components/productsCont/productsContainer';

export default function ProductDetails() {
    const handleReviewSubmit = (productId, review) => {
        // Handle review submission logic here
        console.log('Review submitted for product:', productId, review);
    };

    return (
        <div>
            <ProductView />
            <div className="cont_margin">
                <ReviewForm productId={123} onReviewSubmit={handleReviewSubmit} />
            </div>
            <ProductsContainer name="Related Products" />   
        </div>
    );
}