import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
    display: flex;
    height: 100%;
`;
const Ul = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const NavItems = () => {
    return (
        <Nav>
            <Ul>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Gallery</NavItem>
                <NavItem>Contact</NavItem>
            </Ul>
        </Nav>
    )
}

export default NavItems;
