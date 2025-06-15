<<<<<<< HEAD
import Spinner from '../components/spinner.jsx';
=======

>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
import SideBar from '../components/afterLogIn/sideBar';
import ProductCard from '../components/productCard.jsx';
import { useProductStore } from '../store/useProductStore.jsx';
import { useEffect } from 'react';

export default function SearchPage(){
<<<<<<< HEAD
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
=======
    const { products, loading, fetchProducts } = useProductStore();
    useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
    console.log(products);
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
    return (
        <div className="searchPage">
            <SideBar />
            <div className="searchResults">
<<<<<<< HEAD
                <div className="productsContainerSearch">
                    
                    {products?.length > 0 && productsSearched.length ==0 ? (
                        products?.map((product) => (
                            <div className="productCard">
                                <ProductCard key={product.id} product={product} />
=======
                <h1>Search Results</h1>
                <div>
                    
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <div key={product?.id} className="productCard">
                                <ProductCard key={product?.id} product={product} />
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
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
