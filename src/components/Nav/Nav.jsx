import React, { Component } from 'react';
import styled from 'styled-components'

class Nav extends Component {
    render() {
        return (
            <NavContainer>
                <NavItem>OUR CLIENTS</NavItem>
                <NavItem>PORTFOLIO</NavItem>
                <NavItem>ABOUT US</NavItem>
                <NavItem>CONTACT</NavItem>
            </NavContainer>
        );
    }
}

export default Nav;

const NavContainer = styled.ul`
    float: right;
    color: #ccc;
    padding:30px 80px;
`;

const NavItem = styled.li`
    display:inline-block;
    cursor:pointer;
    margin-left:30px;
    font-weight: normal;
    &:hover {
        color: #2299ff;
        text-decoration: underline;
    }
`;