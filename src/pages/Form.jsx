import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Etapa1 from '../components/Etapa1';
import Etapa2 from '../components/Etapa2';
import Etapa3 from '../components/Etapa3';

function Form() {
 // Initialize state to track the active step
 const [activeStep, setActiveStep] = useState({ Etapa1: true, Etapa2: false, Etapa3: false });

 // Handlers to update the active step
 const handleEtapa1Click = () => setActiveStep({ Etapa1: true, Etapa2: false, Etapa3: false });
 const handleEtapa2Click = () => setActiveStep({ Etapa1: false, Etapa2: true, Etapa3: false });
 const handleEtapa3Click = () => setActiveStep({ Etapa1: false, Etapa2: false, Etapa3: true });

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
        </section>
      </main>
    </>
 );
}

export default Form;