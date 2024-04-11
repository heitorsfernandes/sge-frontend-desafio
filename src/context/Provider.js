import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) { 
    
    const context = {
    };

    return (
        <AppContext.Provider value={ context }>
            { children }
        </AppContext.Provider>
    );
} 

export default Provider;