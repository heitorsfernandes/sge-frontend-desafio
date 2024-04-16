import React from 'react';
// import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
    const [catList, setCatList] = React.useState([]);
    const [tags, setTag] = React.useState([]);
    const [formData, setFormData] = React.useState({
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        confirmPassword: { value: '', error: '' },
        name: { value: '', error: '' },
        surname: { value: '', error: '' },
        dob: { value: '', error: '' },
        streetNumber: { value: '', error: '' },
        city: { value: '', error: '' },
        state: { value: '', error: '' },
        postalCode: { value: '', error: '' },
     });

    const context = {
        setCatList,
        catList,
        setTag,
        tags,
        formData,
        setFormData,
    };

    return (
        <AppContext.Provider value={ context }>
            { children }
        </AppContext.Provider>
    );
} 

export default Provider;