// header (Black) - with logo, socials, login/sign up
// nav - Home, Products, Contact Us
// Jumbrotron - carousel of each car brand that the shop has performed work on (BMW, Subaru, Mitsubishi)
// body - Static Brand clickable images
// footer - Business Info (address, phone number), GoogleMaps?, Copyright, socials

// data needed from backend: none

import React from 'react'
import Mitusbishi from '../images/transparentmitlogo.png'
import Subaru from '../images/transparentsublogo.png'
import Bmw from '../images/transparentbmwlogo.png'

export default function Products() {
    return (
        <div style={{margin: '0 2%'}}>
            <div className='brandimg'>
                <a href='/Mitsubishi'><img src={Mitusbishi} className='mitlogo' /></a>
                <a href='/Subaru'><img src={Subaru} className='subarulogo' /></a>
                <a href='/Bmw'><img src={Bmw} className='bmwlogo' /></a>
            </div>
        </div>
    )
}
