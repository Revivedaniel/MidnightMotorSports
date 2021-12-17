import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';

import CategoryNav from '../../components/CategoryNav';
import PartCard from '../../components/PartCard';

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_MODEL } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import { useSpring, animated, config } from 'react-spring';

export default function SubaruProducts() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    let { model } = useParams();

    const { loading, data } = useQuery(QUERY_MODEL, {
        variables: { name: model }
    });

    let partsData

    if (data) {
        partsData = data.model.parts
    }

    useEffect(() => {
        if (data) {
            dispatch({
                type: 'UPDATE_PARTS',
                parts: data.model.parts,
            });
            data.model.parts.forEach((part) => {
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

    function filterParts() {
        if (!currentCategory) {
            return partsData;
        }

        return partsData.filter(
            (part) => part.category._id === currentCategory
        );
    }

    const heroAnime = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200, config: config.molasses })

    return (
        <div className='productsContainer'>
            <animated.div style={heroAnime}>
                <div className='productsHero' style={{ backgroundImage: `url(/images/${model}wallpaper.jpg` }}>
                    <h1 className='carmodelname'>{model.toUpperCase()}</h1>
                </div>
            </animated.div>
            <div className='d-flex'>
                <CategoryNav />
                <div id='brzPartList' className='partscontainer d-flex'>
                    {partsData &&
                        filterParts().map(part => {
                            return (
                                <PartCard
                                    key={part._id}
                                    _id={part._id}
                                    model={model.toUpperCase()}
                                    image={part.image}
                                    name={part.name}
                                    price={part.price}
                                    description={part.description}
                                    quantity={part.quantity}
                                    year={part.year}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
