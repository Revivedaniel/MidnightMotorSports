import React from 'react'
import Evox from '../../images/transparentevox.png'
import Evo9 from '../../images/transparentevo9.png'
import { Link } from "react-router-dom";
import { useSpring, animated, config } from 'react-spring'


export default function Mitsubishi() {
    const evo7anime = useSpring({ from: { x: -1000, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })
    const Xanime = useSpring({ from: { x: 800, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200, config: config.molasses })

    return (
        <div>
            <div className='mitsuimgs'>
                <div>
                    <Link to="/Mitsubishi/evo789" style={{ textDecoration: 'none' }}>
                        <animated.div style={evo7anime}>
                            <img src={Evo9} alt='evoix image' className='evo9img' />
                        </animated.div>
                        <h1 className='carmodelname'>EVO7/8/9</h1>
                    </Link>
                </div>
                <div>
                    <Link to="Mitsubishi/evox" style={{ textDecoration: 'none' }}>
                        <animated.div style={Xanime}>
                            <img src={Evox} alt='evox image' className='evoximg' />
                        </animated.div>
                        <h1 className='carmodelname'>EVOX</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
