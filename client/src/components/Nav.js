// nav - Home, Products, Contact Us
import React from "react";
import { Link } from "react-router-dom";

export default function navBar() {
    return (
    <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to="/models" style={{ textDecoration: 'none' }}>
            Products
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            Contact Us
        </Link>
    </nav>
)}


