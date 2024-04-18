import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { EtapaFormStyle } from '../styles/EtapaFormStyle';


function Etapa3() {
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
      case 'streetNumber':
      case 'city':
      case 'state':
        if (!value.trim()) {
          error = 'Preencha este campo.';
        }
        break;
      case 'postalCode':
        const postalCodeRegex = /^\d{8}$/; // Validação de 8 digitos numéricos
        if (!value.trim()) {
          error = 'Preencha o CEP.';
        } else if (!postalCodeRegex.test(value)) {
          error = 'CEP inválido.';
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
              <label htmlFor="streetNumber" className="visually-hidden"/>
              <input
                type="text"
                id="streetNumber"
                name="streetNumber"
                placeholder="Street and Number"
                value={formData.streetNumber.value || ''}
                onChange={handleChange}
              />
              {formData.streetNumber.error && (
                <span className="error-message">{formData.streetNumber.error}</span>
              )}

              <label htmlFor="city" className="visually-hidden"/>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city.value || ''}
                onChange={handleChange}
              />
              {formData.city.error && (
                <span className="error-message">{formData.city.error}</span>
              )}

              <label htmlFor="state" className="visually-hidden"/>
              <select 
                id="state" 
                name="state" 
                value={formData.state.value || ''}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              {formData.state.error && (
                <span className="error-message">{formData.state.error}</span>
              )}

              <label htmlFor="postalCode" className="visually-hidden"/>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code (CEP)"
                value={formData.postalCode.value || ''}
                onChange={handleChange}
              />
              {formData.postalCode.error && (
                <span className="error-message">{formData.postalCode.error}</span>
              )}
            </form>
          </EtapaFormStyle>
        </section>
      </main>
    </>
  );
}

export default Etapa3;