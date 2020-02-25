import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

export default class NavVar extends Component {    
    
    render() { 
        return ( 
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">VenturaTest</NavbarBrand>                
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/products">Products list</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products/new">New product</NavLink>
                    </NavItem>
                </Nav>                    
            </Navbar>
            
         );
    }
}
 
