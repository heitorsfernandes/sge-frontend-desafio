import React, { useState, useContext, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Etapa1 from '../components/Etapa1';
import Etapa2 from '../components/Etapa2';
import Etapa3 from '../components/Etapa3';
import AppContext from '../context/AppContext';
import Modal from '../components/Modal';
import { FormStyle } from '../styles/FormStyle';


function Form() {
 const [activeStep, setActiveStep] = useState({ Etapa1: true, Etapa2: false, Etapa3: false });
 const [isDisabled, setIsDisabled] = useState(true);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const { formData } = useContext(AppContext);

 const handleEtapa1Click = () => setActiveStep({ Etapa1: true, Etapa2: false, Etapa3: false });
 const handleEtapa2Click = () => setActiveStep({ Etapa1: false, Etapa2: true, Etapa3: false });
 const handleEtapa3Click = () => setActiveStep({ Etapa1: false, Etapa2: false, Etapa3: true });

 const avancarEtapa = () => {
    if (activeStep.Etapa1) {
      handleEtapa2Click();
    } else if (activeStep.Etapa2) {
      handleEtapa3Click();
    } else if (activeStep.Etapa3) {
      handleEtapa1Click();
    }
  }

  const hasErrors = () => {
    const obligatoryData = Object.fromEntries(
      Object.entries(formData).filter(([key]) => key !== 'dob')
    ); // Date of birth não é obrigatório
  
    for (const key in obligatoryData) {
      if (!obligatoryData[key].value || obligatoryData[key].error) {
        return true;
      }
    }
    return false;
  };

  const classError = () => {
    if (formData.email.error || formData.password.error || formData.confirmPassword.error) return true;
  }

  const classError2 = () => {
    if (formData.name.error || formData.surname.error || formData.dob.error) return true;
  }

  const classError3 = () => {
    if (formData.streetNumber.error || formData.city.error || formData.state.error || formData.postalCode.error) return true;
  }

  useEffect(() => {
    setIsDisabled(hasErrors());
    classError();
    classError2()
    classError3()
  }, [formData]);

  const handleSubmit = () => {
    if (!hasErrors()) {
      setIsModalOpen(true); // Se não houver erros, abra a modal
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    for (const key in formData) {
      formData[key].value = '';
    }
    setIsDisabled(true);
  };

 return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <section>
          <FormStyle>
            <div>
              <p className={'etapa-button ' + (classError() ? 'error' : '')} 
                onClick={handleEtapa1Click}
              >
                  Etapa 1
              </p>
              <p className={'etapa-button ' + (classError2() ? 'error' : '')}
                onClick={handleEtapa2Click}
              >
                  Etapa 2
              </p>
              <p className={'etapa-button ' + (classError3() ? 'error' : '')}
                onClick={handleEtapa2Click}
              >
                  Etapa 3
              </p>            
            </div>
            {activeStep.Etapa1 && <Etapa1 />}
            {activeStep.Etapa2 && <Etapa2/>}
            {activeStep.Etapa3 && <Etapa3/>}
            <div>
              <button class='avancar' onClick={avancarEtapa}>Avançar</button>
              <button class='enviar' disabled={isDisabled} onClick={handleSubmit}>Enviar</button>
            </div>
            {isModalOpen && (
              <Modal onClose={handleCloseModal}>Seu formulário foi enviado com sucesso!</Modal>
            )}
         </FormStyle>
        </section>
      </main>
    </>
 );
}

export default Form;