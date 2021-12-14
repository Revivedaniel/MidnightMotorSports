import React from 'react'
import Sti from '../../images/transparentwrx.png'
import Brz from '../../images/transparentbrz.png'
import { Link } from "react-router-dom";
import { useSpring, animated, config } from 'react-spring'

export default function Subaru() {
    const brzanime = useSpring({ from: { x: -1000, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })
    const stianime = useSpring({ from: { x: 800, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })

    return (
        <div>
            <div className='subieimgs'>
                <div>
                    <Link to="/subaru/brz" style={{ textDecoration: 'none' }}>
                        <animated.div style={brzanime}>
                            <img src={Brz} alt='brz image' className='brzimg' />
                        </animated.div>
                        <h1 className='carmodelname'>BRZ</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/subaru/sti" style={{ textDecoration: 'none' }}>
                        <animated.div style={stianime}>
                            <img src={Sti} alt='evox image' className='stiimg' />
                        </animated.div>
                        <h1 className='carmodelname'>STI</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
