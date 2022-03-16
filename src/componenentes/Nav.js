import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = ({menuAbierto}) => {
    return ( 
        <MenuContenedor menuAbierto={menuAbierto}>
            <NavContenedor>
                <NavItem>
                    <NavLink to="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/precio">Precios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                </NavItem>
            </NavContenedor>
        </MenuContenedor>
     );
}

const MenuContenedor = styled.nav`
    /* margin-left: auto; */
    position: fixed;
    top:0;
    right:${props => !props.menuAbierto ? "-12em" : "0"};
    width:12rem;
    height: 100vh;
    background:#ccc;
`

const NavContenedor = styled.ul`
    
`

const NavItem = styled.li`
    margin-left:1rem;
`

const NavLink = styled(Link)`
    text-decoration: none;
`

export default Nav;