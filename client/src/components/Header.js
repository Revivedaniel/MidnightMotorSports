// header (Black) - with logo, socials, login/sign up
import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import Midnight from '../images/midnightlogo.png'

export default function Header() {
    return (
        <header>
            <div />

            <Link to="/about"><img src={Midnight} alt='midnight logo' className='midnightLogo' /></Link>
            <div>
                <a href="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/949midnight.motorsports" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                {!Auth.loggedIn() ?
                    <Link to="/login">
                        Login
                    </Link>
                    :
                    <Link to="/" onClick={() => Auth.logout()}>
                        Logout
                    </Link>
                }
            </div>
        </header>
    )
}