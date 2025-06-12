
import SideBar from '../components/afterLogIn/sideBar';
import ProductCard from '../components/productCard.jsx';
import { useProductStore } from '../store/useProductStore.jsx';
import { useEffect } from 'react';

export default function SearchPage(){
    const { products, loading, fetchProducts } = useProductStore();
    useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
    console.log(products);
    return (
        <div className="searchPage">
            <SideBar />
            <div className="searchResults">
                <h1>Search Results</h1>
                <div>
                    
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <div key={product?.id} className="productCard">
                                <ProductCard key={product?.id} product={product} />
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
