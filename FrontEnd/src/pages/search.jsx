import Spinner from '../components/spinner.jsx';
import SideBar from '../components/afterLogIn/sideBar';
import ProductCard from '../components/productCard.jsx';
import { useProductStore } from '../store/useProductStore.jsx';
import { useEffect } from 'react';

export default function SearchPage(){
    const { products, loading, fetchProducts,productsSearched , fetchProductsByName} = useProductStore();

    useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProductsByName();
  },[])


    if (loading) {
        return (
            <div className="loading">
                <Spinner size={"20vh"}/>
            </div>
        );
    }   
    return (
        <div className="searchPage">
            <SideBar />
            <div className="searchResults">
                <div className="productsContainerSearch">
                    
                    {products?.length > 0 && productsSearched.length ==0 ? (
                        products?.map((product) => (
                            <div className="productCard">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        ))
                    ) : (
                        productsSearched?.map((product) => (
                            <div key={product?.id} className="productCard">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
