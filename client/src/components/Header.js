// header (Black) - with logo, socials, login/sign up
import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import Midnight from '../images/midnightlogo.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'

export default function Header() {
    if (!Auth.loggedIn()) {
        return (
            <header>
                <a href="/"><img src={Midnight} alt='midnight logo' className='midnightLogo' /></a>
                <h1 className='headerPhrase'>"The Real Thang Happens At Night"</h1>
                <img src={Instagram} alt='instagram logo' className='instagramLogo' />
                <img src={Facebook} alt='facebook logo' className='facebookLogo' />
                <h2>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        Login
                    </Link>
                </h2>
            </header>
        )
    } else {
        return (
            <header>
                <a href="/"><img src={Midnight} alt='midnight logo' className='midnightLogo' /></a>
                <h1 className='headerPhrase'>"The Real Thang Happens At Night"</h1>
                <img src={Instagram} alt='instagram logo' className='instagramLogo' />
                <img src={Facebook} alt='facebook logo' className='facebookLogo' />
                <h2>
                    <a href="/" onClick={() => Auth.logout()} style={{ textDecoration: 'none' }}>
                        Logout
                    </a>
                </h2>
            </header>
        )
    }
}