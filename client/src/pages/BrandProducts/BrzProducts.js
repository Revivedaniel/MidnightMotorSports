import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryNav from '../../components/CategoryNav'
import { useQuery } from '@apollo/client';
import { QUERY_MODEL } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';

export default function Brzparts() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_MODEL, {
        variables: { name: 'brz' }
    });

    let partsData

    if (data) {
        console.log(data.model.parts)
        partsData = data.model.parts
    }

    useEffect(() => {
        if (data) {
            dispatch({
                type: 'UPDATE_PARTS',
                parts: partsData,
            });
            partsData.forEach((part) => {
                idbPromise('parts', 'put', part);
            });
        } else if (!loading) {
            idbPromise('parts', 'get').then((parts) => {
                dispatch({
                    type: 'UPDATE_PARTS',
                    parts: parts,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterparts() {
        if (!currentCategory) {
            return state.parts;
        }

        return state.parts.filter(
            (part) => part.category._id === currentCategory
        );
    }

    const cardStyle = {
        width: "18rem",
        margin: '10px'
    }

    return (
        <>

            <div className='topboxbrz'>
                <h1 className='carmodelname'>BRZ</h1>
            </div>

            <div className='productscontainer'>

                <CategoryNav />

                <div id='brzPartList' className='partscontainer'>
                    {partsData &&
                        partsData.map(part => {
                            return (
                                <div className="card" style={cardStyle}>
                                    <img className="card-img-top" src={part.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{part.name}</h5>
                                        <p className="card-description">{part.description}</p>
                                        <p className="card-price">{part.price}</p>
                                        <a href="#" class="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                            )
                        })}
                </div>

            </div>
        </>
    )
}
