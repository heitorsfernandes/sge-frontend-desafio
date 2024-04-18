import styled from 'styled-components';

export const EtapaFormStyle = styled.div`
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 440px;
    margin: 0 auto;
    }

    label {
    margin-bottom: 8px;
    font-weight: bold; 
    }

    input {
    padding: 10px; 
    margin-bottom: 5px; 
    border: 1px solid #ccc; 
    border-radius: 5px;
    font-size: 16px;
    width: 380px;
    color: #273440;
    text-align: center;
    }

    input:focus {
    outline: none; /* Remove default focus outline */
    border-color: #6ab0ff; /* Change border color on focus */
    box-shadow: 0 0 5px rgba(106, 176, 255, 0.5); /* Add box shadow on focus */
    }

    select{
    padding: 10px; 
    margin-bottom: 5px; 
    border: 1px solid #ccc; 
    border-radius: 5px;
    font-size: 16px;
    width: 400px;
    color: #273440;
    text-align: center;    
    }

    select::placeholder {
    color: #555;
    }

    input::placeholder {
    color: #555;
    }

    .error {
    border-color: #f44336; /* Set border color for inputs with errors */
    }

    .error-message {
    color: #ff7048;
    font-size: 14px;
    margin-top: 0px;
    }

`;
