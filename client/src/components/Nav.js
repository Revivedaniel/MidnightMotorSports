// nav - Home, Products, Contact Us
import React from "react";
import { Link } from "react-router-dom";

export default function navBar() {
    return <nav>
        <ul className='unorderedList'>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/Products">
                    Products
                </Link>
            </li>
            <li>
                <Link to="/Contact">
                    Contact Us
                </Link>
            </li>
        </ul>
    </nav>
}


