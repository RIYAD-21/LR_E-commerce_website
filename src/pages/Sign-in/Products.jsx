import computer from "../../assets/computer.jpg";
import {FaStar} from "react-icons/fa";

function Products(){

    const products = {
            id: 1,
            name: "computer I7",
            category: "Electronics",
            price: "600$",
            rating: 4,
            sales: "1,5K",
            image: computer,
        };


    return (
        <div className={"container"}>
            <img src={computer} alt="computer logo" />
            <h2>{products.name}</h2>
            <h2>{products.price}</h2>
            <h3>{products.sales}</h3>
            <h3>{products.category}</h3>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((s) => (
                    <FaStar key={s} color={s <= products.rating ? "#ffc107" : "#ccc"} />
                ))}
            </div>

        </div>
    )
}

export default Products;