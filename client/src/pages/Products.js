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
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'

export default function Products() {
    const Manime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 100 })
    const Sanime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 600 })
    const Banime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1100 })

    return (
        <div className='brandContainer'>
            <animated.div style={Manime}>
                <Link to='/Mitsubishi'><img src={Mitusbishi} className='mitlogo' alt='mitsubishi logo' /></Link>
            </animated.div>
            <animated.div style={Sanime}>
                <Link to='/Subaru'><img src={Subaru} className='subarulogo' alt="Subaru logo" /></Link>
            </animated.div>
            <animated.div style={Banime}>
                <Link to='/Bmw'><img src={Bmw} className='bmwlogo' alt='bmw logo' /></Link>
            </animated.div>
        </div>
    )
}
