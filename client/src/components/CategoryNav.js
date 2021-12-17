import React, { useEffect } from 'react'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

export default function CategoryNav() {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;

    const { loading, data } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (data) {
            dispatch({
                type: 'UPDATE_CATEGORIES',
                categories: data.categories,
            });
            data.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: 'UPDATE_CATEGORIES',
                    categories: categories,
                });
            });
        }
    }, [data, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: 'UPDATE_CURRENT_CATEGORY',
            currentCategory: id,
        });
    };

    return (
        <div className='categoryNav' id='navButtons'>
            <DropdownButton as={ButtonGroup} key='induction' id="dropdown-basic-button" drop='end' title="Forced Induction">
                <Dropdown.Item onClick={() => handleClick(categories[0]._id)}>Turbo Kits</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[1]._id)}>Intercoolers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[2]._id)}>Blow Off Valves</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='suspension' id="dropdown-basic-button" drop='end' title="Suspension">
                <Dropdown.Item onClick={() => handleClick(categories[3]._id)}>Coilovers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[4]._id)}>Lowering Springs</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[5]._id)}>Shocks</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='exhaust' id="dropdown-basic-button" drop='end' title="Exhaust">
                <Dropdown.Item onClick={() => handleClick(categories[0]._id)}>Mufflers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[1]._id)}>Manifolds</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[2]._id)}>Heat Shields</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='brakes' id="dropdown-basic-button" drop='end' title="Brakes">
                <Dropdown.Item onClick={() => handleClick(categories[3]._id)}>Calipers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[4]._id)}>Brake Rotors</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick(categories[5]._id)}>Brake Pads</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}
