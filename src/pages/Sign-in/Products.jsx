import computer from "../../assets/computer.jpg";
import {FaStar} from "react-icons/fa";
import "./Sign-in.css"

function Products(){

    const products = [{
            id: 1,
            name: "computer I7",
            category: "Electronics",
            price: "600$",
            rating: 4,
            sales: "1,5K",
            image: computer,
            },
            {
            id: 1,
            name: "computer I7",
            category: "Electronics",
            price: "600$",
            rating: 4,
            sales: "1,5K",
            image: computer,
            },
            {
                id: 1,
                name: "computer I7",
                category: "Electronics",
                price: "600$",
                rating: 4,
                sales: "1,5K",
                image: computer,
            },
        {
            id: 1,
            name: "computer I7",
            category: "Electronics",
            price: "600$",
            rating: 4,
            sales: "1,5K",
            image: computer,
        },
        {
            id: 1,
            name: "computer I7",
            category: "Electronics",
            price: "600$",
            rating: 4,
            sales: "1,5K",
            image: computer,
        },
        ]


    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />

                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <p className="product-category">{product.category}</p>
                        <p className="product-sales">{product.sales} sold</p>

                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <FaStar key={s} color={s <= product.rating ? "#ffc107" : "#ccc"} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;