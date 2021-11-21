// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials
//23211 Cherry Ave, Lake Forest, CA 92630//
import React from "react";
import Midnight from '../images/midnightlogo.png'
import GoogleMaps from '../images/GoogleMapslogo.png'


export default function Footer() {
    return<footer>
    <img src={Midnight} alt='midnight logo' className='midnightLogo' />
        <h2 className='bottomFooter'>"The Real Thang Happens At Night"</h2>
        <a href="https://www.google.com/maps/dir/33.8549097,-118.1787504/23211+Cherry+Ave,+Lake+Forest,+CA+92630/@33.7516662,-118.2128865,10z/data=!3m1!4b1!4m17!1m7!3m6!1s0x80dce90036cce33b:0x967a743faaec8edc!2s23211+Cherry+Ave,+Lake+Forest,+CA+92630!3b1!8m2!3d33.6259613!4d-117.6893627!4m8!1m1!4e1!1m5!1m1!1s0x80dce90036cce33b:0x967a743faaec8edc!2m2!1d-117.6893627!2d33.6259613?hl=en"><img src={GoogleMaps} alt='google maps logo' className='googleMaps'/></a>
        <h3 className='address'>23211 Cherry Ave, Lake Forest, CA 92630</h3>
        <a href="tel:9492733700">(949) 273-3700</a>
    </footer>
}
 