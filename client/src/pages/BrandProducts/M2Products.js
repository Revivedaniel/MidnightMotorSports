import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useQuery } from '@apollo/client';

import CategoryNav from '../../components/CategoryNav'
import PartCard from '../../components/PartCard'

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_MODEL } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

export default function M2Products() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_MODEL, {
        variables: { name: 'm2' }
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

    return (
        <>
            <div className='topboxm2'>
                <h1 className='carmodelname'>M2</h1>
            </div>
            <div className='partsContainer d-flex justify-content-around'>
                <CategoryNav />
                <div id='m2PartList' className='partscontainer col-10 d-flex justify-content-evenly'>
                    {partsData &&
                        filterParts().map(part => {
                            return (
                                <PartCard
                                    key={part._id}
                                    _id={part._id}
                                    model={'M2'}
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
        </>
    )
}
