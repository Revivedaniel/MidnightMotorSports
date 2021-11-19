// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// jumbotron - carousel of photos
// body - About Us information, Chris? info, pictures of cars / etc.
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials

// data needed from backend: none
import React from 'react';
import Nav from '../components/Nav'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
function HomePage(){
    return <div>
        <Header />
        <Nav />
    <Jumbotron />
    </div>
}


export default HomePage;