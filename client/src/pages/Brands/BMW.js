import React from 'react'
import M2 from '../../images/transparentm2.png'
import M4 from '../../images/transparentm4.png'


export default function Bmw() {
    return (
        <div>
            <div className='bmwimgs'>
                <div>
            <img src={M2} alt='m2 image' className='m2img' />
            <h1 className='carmodelname'>M2</h1>
                </div> 
                <div>   
            <img src={M4} alt='m4 image' className='m4img' /> 
            <h1 className='carmodelname'>M4</h1>
                   </div>
            </div>
            </div>
    )
}