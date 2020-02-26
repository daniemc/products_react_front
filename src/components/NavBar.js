import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                        <Link className="nav-link" to="/products">Products list</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/products/new">New product</Link>
                    </NavItem>
                </Nav>                    
            </Navbar>
            
         );
    }
}
 
