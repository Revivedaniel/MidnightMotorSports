import React from 'react'
import Sti from '../../images/transparentwrx.png'
import Brz from '../../images/transparentbrz.png'
export default function Subaru() {
    return (
        <div>
            <div className='subieimgs'>
                <div>
            <img src={Brz} alt='brz image' className='brzimg' />
            <h1 className='carmodelname'>BRZ</h1>
                </div> 
                <div>   
            <img src={Sti} alt='evox image' className='stiimg' /> 
            <h1 className='carmodelname'>STI</h1>
                   </div>
            </div>
            </div>
    )
}
