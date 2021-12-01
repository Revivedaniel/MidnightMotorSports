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
import { useSpring, animated, config } from 'react-spring'

export default function Products() {
    const Manime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 100 })
    const Sanime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 600 })
    const Banime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1100 })

    return (
        <div style={{ margin: '0 2%' }}>
            <div className='brandimg'>
                <animated.div style={Manime}>
                    <a href='/Mitsubishi'><img src={Mitusbishi} className='mitlogo' /></a>
                </animated.div>
                <animated.div style={Sanime}>
                    <a href='/Subaru'><img src={Subaru} className='subarulogo' /></a>
                </animated.div>
                <animated.div style={Banime}>
                    <a href='/Bmw'><img src={Bmw} className='bmwlogo' /></a>
                </animated.div>
            </div>
        </div>
    )
}
