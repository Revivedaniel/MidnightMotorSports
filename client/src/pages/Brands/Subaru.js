import React from 'react'
import Sti from '../../images/transparentwrx.png'
import Brz from '../../images/transparentbrz.png'
export default function Subaru() {
    return (
        <div>
            <div className='subaruimgs'>
            <img src={Brz} alt='sti car image' className='stiimg' />        
            <img src={Sti} alt='brz car image' className='brzimg' />        
            </div>
            </div>
    )
}
