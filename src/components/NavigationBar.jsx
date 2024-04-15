import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_sge.png';

function NavigationBar() {
    return (
        <nav>
            <div>
            <img src={logo} alt="Logo" width="128" height="86" />
            </div>
            <div>
                <Link to="/catList">Lista de gatos</Link>
                <Link to="/form">Formulario</Link>
            </div>
        </nav>
    );
}

export default NavigationBar;