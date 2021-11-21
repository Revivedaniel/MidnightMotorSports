import React from 'react'
import Sti from '../../images/transparentwrx.png'
import Brz from '../../images/transparentbrz.png'
import { Link } from "react-router-dom";

export default function Subaru() {
    return (
        <div>
            <div className='subieimgs'>
                <div>
                    <Link to="/subaru/brz" style={{ textDecoration: 'none' }}>
                        <img src={Brz} alt='brz image' className='brzimg' />
                        <h1 className='carmodelname'>BRZ</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/subaru/sti" style={{ textDecoration: 'none' }}>
                        <img src={Sti} alt='evox image' className='stiimg' />
                        <h1 className='carmodelname'>STI</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
