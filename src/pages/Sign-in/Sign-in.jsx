import {
    FaTshirt,
    FaGem,
    FaLaptop,
    FaChild,
    FaFootballBall,
    FaBook,
    FaCamera,
    FaCar,
} from "react-icons/fa";

import './Sign-in.css';

const categories = [
    { name: "Tech", icon: <FaLaptop /> },
    { name: "Accesories", icon: <FaGem /> },
    { name: "Clothes", icon: <FaTshirt /> },
    { name: "Electronics", icon: <FaLaptop /> },
    { name: "Kids", icon: <FaChild /> },
    { name: "Sports", icon: <FaFootballBall /> },
    { name: "Books", icon: <FaBook /> },
    { name: "Cameras", icon: <FaCamera /> },
    { name: "Automotive", icon: <FaCar /> },
];


function SignIn() {



    return (
        <div className="sign-in">
            {categories.map(cat=> <button className={"category"}>
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
            </button>)}
        </div>
    )
}

export default SignIn