import React, { useState } from 'react';
import Profile from './profile.jsx';
import Cart from '../cart/cart.jsx'; 
import './clientProfil.css';

export default function ProfileSideBar() {
    const [selectedComponent, setSelectedComponent] = useState('profile'); 

    const handleClick = (event) => {
        const selectedItem = document.querySelector('.sideBar li.selected');
        if (selectedItem) {
            selectedItem.classList.remove('selected');
        }
        event.target.classList.add('selected');
        setSelectedComponent(event.target.id);
    };

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'profile':
                return <Profile />;
            case 'orders':
                // return <Orders />;
            case 'cart':
                return <Cart />;
            case 'wishlist':
                // return <Wishlist />;
            case 'settings':
                // return <Settings />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="sideBar">
                <ul>
                    <li id="profile" className="selected" onClick={handleClick}>Profile</li>
                    <li id="orders" onClick={handleClick}>Orders</li>
                    <li id="cart" onClick={handleClick}>Cart</li>
                    <li id="wishlist" onClick={handleClick}>Wishlist</li>
                    <li id="settings" onClick={handleClick}>Settings</li>
                </ul>
            </div>
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
}