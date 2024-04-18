import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { isValid } from 'date-fns';
import { EtapaFormStyle } from '../styles/EtapaFormStyle';


function Etapa2() {
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
      case 'name':
        if (!value.trim()) {
          error = 'Preencha o nome.';
        }
        break;
      case 'surname':
        if (!value.trim()) {
          error = 'Preencha o sobrenome.';
        }
        break;
        // Para validar a data de nascimento
        // case 'dob':
        //   const isValidDate = isValid(new Date(value));
        //   const year = parseInt(value.slice(0, 4), 10);
        //   if (!value.trim()) {
        //     error = 'Preencha data de nascimento.';
        //   } else if (!isValidDate) {
        //     error = 'Data de nascimento inválida.';
        //   } else if (year < 1900 || year > 2024) {
        //     error = 'Ano de nascimento inválido.';
        //   }
        //   break;
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
              <label htmlFor="name" className="visually-hidden"/>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name.value || ''}
                onChange={handleChange}
              />
              {formData.name.error && (
                <span className="error-message">{formData.name.error}</span>
              )}

              <label htmlFor="surname" className="visually-hidden"/>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
                value={formData.surname.value || ''}
                onChange={handleChange}
              />
              {formData.surname.error && (
                <span className="error-message">{formData.surname.error}</span>
              )}

              <label htmlFor="dob" className="visually-hidden"/>
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob.value || ''}
                onChange={handleChange}
              />
              {formData.dob.error && (
                <span className="error-message">{formData.dob.error}</span>
              )}
            </form>
          </EtapaFormStyle>
        </section>
      </main>
    </>
  );
}

export default Etapa2;