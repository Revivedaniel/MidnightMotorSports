import React from 'react'
import M2 from '../../images/transparentm2.png'
import M4 from '../../images/transparentm4.png'
import { Link } from "react-router-dom";
import { useSpring, animated, config } from 'react-spring'

export default function Bmw() {
    const brzanime = useSpring({ from: { x: -1000, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })
    const stianime = useSpring({ from: { x: 800, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })

    return (
        <div>
            <div className='bmwimgs'>
                <div>
                    <Link to="/bmw/m2" style={{ textDecoration: 'none' }}>
                        <animated.div style={brzanime}>
                            <img src={M2} alt='m2 image' className='m2img' />
                        </animated.div>
                        <h1 className='carmodelname'>M2</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/bmw/m4" style={{ textDecoration: 'none' }}>
                        <animated.div style={stianime}>
                            <img src={M4} alt='m4 image' className='m4img' />
                        </animated.div>
                        <h1 className='carmodelname'>M4</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}