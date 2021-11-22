// nav - Home, Products, Contact Us
import React from "react";
import { Link } from "react-router-dom";

export default function navBar() {
    return <nav>
        <ul className='unorderedList'>
            <li>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/Products" style={{ textDecoration: 'none' }}>
                    Products
                </Link>
            </li>
            <li>
                <Link to="/Contact" style={{ textDecoration: 'none' }}>
                    Contact Us
                </Link>
            </li>
        </ul>
    </nav>
}


