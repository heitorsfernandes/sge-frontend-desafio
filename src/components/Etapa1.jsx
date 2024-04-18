import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { EtapaFormStyle } from '../styles/EtapaFormStyle';


function Etapa1() {
  const { formData, setFormData } = useContext(AppContext);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        value,
        error: validateInput(name, value),
      },
    }));
  };

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format.';
        }
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required.';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters long.';
        }
        break;
      case 'confirmPassword':
        if (!value.trim()) {
          error = 'Confirm password is required.';
        } else if (value !== formData.password.value) {
          error = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  return (
    <>
      <main>
        <section>
        <EtapaFormStyle>
          <form>
            <label htmlFor="email" className="visually-hidden"/>
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email"
                value={formData.email.value}
                onChange={handleChange}
                className={formData.email.error ? 'error' : ''}
            />
            {formData.email.error && (
              <span className="error-message">{formData.email.error}</span>
            )}

            <label htmlFor="password" className="visually-hidden"/>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password"
              value={formData.password.value}
              onChange={handleChange}
              className={formData.password.error ? 'error' : ''} 
            />
            {formData.password.error && (
              <span className="error-message">{formData.password.error}</span>
            )}

            <label htmlFor="confirmPassword" className="visually-hidden"/>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Confirm Password"
              value={formData.confirmPassword.value}
              onChange={handleChange}
              className={formData.confirmPassword.error ? 'error' : ''}  
            />
            {formData.confirmPassword.error && (
              <span className="error-message">{formData.confirmPassword.error}</span>
            )}
          </form>
        </EtapaFormStyle>
        </section>
      </main>
    </>
  );
}

export default Etapa1;