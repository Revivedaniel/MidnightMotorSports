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
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781764')}>Turbo Kits</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781765')}>Intercoolers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781768')}>Blow Off Valves</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='suspension' id="dropdown-basic-button" drop='end' title="Suspension">
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781764')}>Coilovers</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Lowering Springs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Shocks</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='exhaust' id="dropdown-basic-button" drop='end' title="Exhaust">
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781766')}>Mufflers</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Manifolds</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Heat Shields</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} key='brakes' id="dropdown-basic-button" drop='end' title="Brakes">
                <Dropdown.Item href="#/action-1">Calipers</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781767')}>Brake Rotors</Dropdown.Item>
                <Dropdown.Item onClick={() => handleClick('61a6ed985d401e43a8781767')}>Brake Pads</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}
