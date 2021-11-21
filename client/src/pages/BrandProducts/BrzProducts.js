import React from 'react'
import BrzImg from '../../images/transparentbrz.png'

export default function Brz() {
    return (
        <div>
            <img src={BrzImg} alt='brz image' className='brzimg' />
            <h1 className='carmodelname'>BRZ</h1>
        </div>
    )
}
