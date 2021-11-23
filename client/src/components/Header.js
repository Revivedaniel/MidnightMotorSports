// header (Black) - with logo, socials, login/sign up
import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import Midnight from '../images/midnightlogo.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'

let button
if (!Auth.loggedIn()) {
    button =
        <h2 className='accountroute'>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                Login
            </Link>
        </h2>
} else {
    button =
        <h2 className='accountroute'>
            <a href="/" onClick={() => Auth.logout()} style={{ textDecoration: 'none' }}>
                Logout
            </a>
        </h2>
}

export default function Header() {
    return (
        <header>
            <a href="/"><img src={Midnight} alt='midnight logo' className='midnightLogo' /></a>
            <h1 className='headerPhrase'>"The Real Thang Happens At Night"</h1>
            <a href='https://www.instagram.com/949midnight.motorsports/' target='https://www.instagram.com/949midnight.motorsports/'><img src={Instagram} alt='instagram logo' className='instagramLogo' /></a>
            <a href='https://www.facebook.com/949midnight.motorsports' target='https://www.facebook.com/949midnight.motorsports'><img src={Facebook} alt='facebook logo' className='facebookLogo' /></a>
            <h2 className='accountroute'>
                <a href="/" onClick={() => Auth.logout()} style={{ textDecoration: 'none' }}>
                    Logout
                </a>
            </h2>
        </header>
    )
}