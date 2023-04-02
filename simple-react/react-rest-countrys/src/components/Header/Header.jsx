import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>React Country Web site</h2>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;