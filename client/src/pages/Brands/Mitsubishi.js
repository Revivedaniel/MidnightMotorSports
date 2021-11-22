import React from 'react'
import Evox from '../../images/transparentevox.png'
import Evo9 from '../../images/transparentevo9.png'
import { Link } from "react-router-dom";


export default function Mitsubishi() {
    return (
        <div>
            <div className='mitsuimgs'>
                <div>
                    <Link to="/Mitsubishi/evo789" style={{ textDecoration: 'none' }}>
                        <img src={Evo9} alt='evoix image' className='evo9img' />
                        <h1 className='carmodelname'>EVO7/8/9</h1>
                    </Link>
                </div>
                <div>
                    <Link to="Mitsubishi/evox" style={{ textDecoration: 'none' }}>
                        <img src={Evox} alt='evox image' className='evoximg' />
                        <h1 className='carmodelname'>EVOX</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
