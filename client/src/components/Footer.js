// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials
//23211 Cherry Ave, Lake Forest, CA 92630//
import React from "react";
import GoogleMaps from '../images/GoogleMapslogo.png'

export default function Footer() {
    return (
        <footer>
            <a href="https://www.google.com/maps/place/23211+Cherry+Ave,+Lake+Forest,+CA+92630/@33.6259613,-117.6915514,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce90036cce33b:0x967a743faaec8edc!8m2!3d33.6259613!4d-117.6893627" target="_blank"><img src={GoogleMaps} alt='google maps logo' className='googleMaps' /></a>
            <h3 className='address'>23211 Cherry Ave, Lake Forest, CA 92630</h3>
            <a href="tel:9492733700" className="phoneN" style={{ textDecoration: 'none', color: 'white' }}>(949) 273-3700</a>
        </footer>
    )
}
