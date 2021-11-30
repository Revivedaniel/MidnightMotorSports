import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryNav from '../../components/CategoryNav'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { QUERY_MODEL } from '../../utils/queries';

export default function Evo789Products() {
    let partsData

    const { loading, data } = useQuery(QUERY_MODEL, {
        variables: { name: 'evo789' }
    })

    if (!loading) {
        console.log(data.model.parts)
        partsData = data.model.parts
    }

    const cardStyle = {
        margin: '10px'
    }

    return (
        
       <>
            <div className='topboxevo7'>
                <h1 className='carmodelname'>EVO7/8/9</h1>

            </div>
 <div className='productscontainer'>

            <CategoryNav />

            <div id='evo789PartList' className='partscontainer'>
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
