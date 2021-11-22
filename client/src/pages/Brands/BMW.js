import React from 'react'
import M2 from '../../images/transparentm2.png'
import M4 from '../../images/transparentm4.png'
import { Link } from "react-router-dom";

export default function Bmw() {
    return (
        <div>
            <div className='bmwimgs'>
                <div>
                    <Link to="/bmw/m2" style={{ textDecoration: 'none' }}>
                        <img src={M2} alt='m2 image' className='m2img' />
                        <h1 className='carmodelname'>M2</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/bmw/m4" style={{ textDecoration: 'none' }}>
                        <img src={M4} alt='m4 image' className='m4img' />
                        <h1 className='carmodelname'>M4</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}