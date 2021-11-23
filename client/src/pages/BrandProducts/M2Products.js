import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownButton, ButtonGroup  } from 'react-bootstrap'

export default function M2Products() {
    return (
        <div className='productscontainer'>
            <div className='topboxm2'>
                <h1 className='carmodelname'>M2</h1>
                
            </div>
            <div className='buttoncontainer'>
            <DropdownButton as={ButtonGroup} key='end' id="dropdown-basic-button" drop='end' title="Forced Induction">
                    <Dropdown.Item href="#/action-1">Turbo Kits</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Intercoolers</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Blow Off Valves</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} key='end' id="dropdown-basic-button" drop='end' title="Suspension">
                    <Dropdown.Item href="#/action-1">Coilovers</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Lowering Springs</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Shocks</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} key='end' id="dropdown-basic-button" drop='end' title="Exhaust">
                    <Dropdown.Item href="#/action-1">Mufflers</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Manifolds</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Heat Shields</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} key='end' id="dropdown-basic-button" drop='end' title="Brakes">
                    <Dropdown.Item href="#/action-1">Calipers</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Brake Rotors</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Brake Pads</Dropdown.Item>
                </DropdownButton>

            </div>

        </div>
    )
}