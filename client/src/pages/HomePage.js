// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// jumbotron - carousel of photos
// body - About Us information, Chris? info, pictures of cars / etc.
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials

// data needed from backend: none
import React from 'react';
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer';

function HomePage(){
    return <div>
       
        <Jumbotron />
        <Footer/>
    </div>
}


export default HomePage;