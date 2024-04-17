import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarContainer, Logo, Menu, MenuItem, NavLink } from '../styles/NavBar';
import logo from '../images/logo_sge.png';

function NavigationBar() {
    return (
        <NavBarContainer>
            <Logo src={logo} alt="Logo" />
            <Menu>
                <MenuItem>
                    <NavLink to="/catList">Lista de gatos</NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/form">Formulario</NavLink>
                </MenuItem>
            </Menu>
        </NavBarContainer>
    );
}

export default NavigationBar;