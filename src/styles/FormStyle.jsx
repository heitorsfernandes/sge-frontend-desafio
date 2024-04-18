import styled from 'styled-components';

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .etapa-button {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
    padding: 30px;
    border-radius: 5px;
    background-color: #273440;
    color: #eff168;
    transition: background-color 0.3s, color 0.3s; 
  }

  .etapa-button:hover {
    background-color: #1c2938;
  }

  button {
    padding: 10px;
    border-radius: 1px; 
    cursor: pointer;
    font-size: 18px;
  }

  button.avancar {
    background-color: #273440;
    color: #eff168;
    margin-right: 20px;
    transition: background-color 0.8s, color 0.3s; /* Add transition effect for color change */
  }

  button.avancar:hover {
    background-color: #1c2938;
  }

  button.enviar {
    background-color: #eff168;
    color: #fff; /* Set text color for Enviar */
    transition: background-color 0.3s, color 0.3s; 
  }

  button.enviar:disabled {
    background-color: rgba(153, 153, 153, 0.2); /* Set background color for disabled Enviar button with 50% opacity */
    color: #555; /* Set text color for disabled Enviar button */
  }

  .error.etapa-button {
    border: 1px solid #f44336; /* Add border style for error etapa-button */
  }
`;



