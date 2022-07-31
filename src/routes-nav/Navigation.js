import React from "react";
import { 
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
} from 'reactstrap';

/**
 * Navigation: Nav bar for site
 * 
 * Props: None
 * State: None
 */
function Navigation(){
    return (
        <Navbar>
            <NavbarBrand href="/">Markov</NavbarBrand>
            <NavItem>
                <NavLink href="/poems">Poems</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/seeds">Seeds</NavLink>
            </NavItem>
        </Navbar>
    );
}

export default Navigation;