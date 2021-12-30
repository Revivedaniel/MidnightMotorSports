// nav - Home, Products, Contact Us
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink activeClassName='active' to="/about" onlyActiveOnIndex>
                About Us
            </NavLink>
            <NavLink activeClassName='active' to="/brands" onlyActiveOnIndex>
                Shop Products
            </NavLink>
            <NavLink activeClassName='active' to="/contact" onlyActiveOnIndex>
                Contact Us
            </NavLink>
        </nav>
    )
}

export default withRouter(NavBar)
