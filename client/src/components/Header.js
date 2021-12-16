// header (Black) - with logo, socials, login/sign up
import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import Midnight from '../images/midnightlogo.png'

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={Midnight} alt='midnight logo' className='midnightLogo' /></Link>
            <h1 className='headerPhrase'>The Real Shit Happens At Night</h1>
            <Link to="https://www.instagram.com/949midnight.motorsports/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
            </Link>
            <Link to="https://www.facebook.com/949midnight.motorsports" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-3x"></i>
            </Link>
            {!Auth.loggedIn() ?
                <Link to="/login" style={{ textDecoration: 'none', fontSize: '2rem' }}>
                    Login
                </Link>
                :
                <Link to="/" onClick={() => Auth.logout()} style={{ textDecoration: 'none', fontSize: '2rem' }}>
                    Logout
                </Link>
            }
        </header>
    )
}