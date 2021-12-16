// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials
//23211 Cherry Ave, Lake Forest, CA 92630//
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Link to="https://www.google.com/maps/place/23211+Cherry+Ave,+Lake+Forest,+CA+92630/@33.6259613,-117.6915514,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce90036cce33b:0x967a743faaec8edc!8m2!3d33.6259613!4d-117.6893627" target="_blank">23211 Cherry Ave, Lake Forest, CA 92630</Link>
            <Link to="tel:9492733700">(949) 273-3700</Link>
        </footer>
    )
}
