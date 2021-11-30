import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryNav from '../../components/CategoryNav'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { QUERY_MODEL } from '../../utils/queries';

export default function StiProducts() {
    let partsData

    const { loading, data } = useQuery(QUERY_MODEL, {
        variables: { name: 'sti' }
    })

    if (!loading) {
        console.log(data.model.parts)
        partsData = data.model.parts
    }

    const cardStyle = {
        width: "18rem",
        margin: '10px'
    }

    return (
        <>
        <div className='topboxsti'>
                <h1 className='carmodelname'>STI</h1>

            </div>
        
        <div className='productscontainer'>
            

            <CategoryNav />

            <div id='stiPartList' className='partscontainer'>
                {partsData &&
                    partsData.map(part => {
                        return (
                            <div className="card" style={cardStyle}>
                                <img className="card-img-top" src={part.image} alt="Card image cap" />
                                <div class ="card-body">
                                <h5 class ="card-title">{part.name}</h5>
                                <p class ="card-description">{part.description}</p>
                                <p class ="card-price">{part.price}</p>
                                <a href="#" class ="btn btn-primary">Add To Cart</a>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div>
        </>
    )
}