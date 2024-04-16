import React, { useState, useContext, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Etapa1 from '../components/Etapa1';
import Etapa2 from '../components/Etapa2';
import Etapa3 from '../components/Etapa3';
import AppContext from '../context/AppContext';


function Form() {
 const [activeStep, setActiveStep] = useState({ Etapa1: true, Etapa2: false, Etapa3: false });
 const [isDisabled, setIsDisabled] = useState(true);
 const { formData } = useContext(AppContext);


 // Handlers to update the active step
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
    // Check if any field has an error or is empty
    for (const key in formData) {
      if (!formData[key].value || formData[key].error) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setIsDisabled(hasErrors());
  }, [formData]);

 return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <section>
          <div>
            <p onClick={handleEtapa1Click}>Etapa 1</p>
            <p onClick={handleEtapa2Click}>Etapa 2</p>
            <p onClick={handleEtapa3Click}>Etapa 3</p>
          </div>
          {activeStep.Etapa1 && <Etapa1 />}
          {activeStep.Etapa2 && <Etapa2 />}
          {activeStep.Etapa3 && <Etapa3 />}
          <div>
            <button onClick={avancarEtapa}>Avançar</button>
            <button disabled={isDisabled} onClick={() => hasErrors}>Enviar</button>
          </div>
        </section>
      </main>
    </>
 );
}

export default Form;