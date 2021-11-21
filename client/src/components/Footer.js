// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials
//23211 Cherry Ave, Lake Forest, CA 92630//
import React from "react";
import Midnight from '../images/midnightlogo.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'

export default function Footer() {
    return<footer>
    <img src={Midnight} alt='midnight logo' className='midnightLogo' />
    <h2 className='bottomFooter'>"The Real Thang Happens At Night"</h2>
        <h3 className='address'>23211 Cherry Ave, Lake Forest, CA 92630</h3>
        <h3 className="phone">(949) 273-3700</h3>
    </footer>
}
