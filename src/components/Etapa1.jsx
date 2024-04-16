import React, { useContext, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';

function Etapa1() {

  return (
    <>
      <main>
        <section>
        <form>
            <label htmlFor="email" className="visually-hidden"/>
            <input type="email" id="email" name="email" placeholder="Email" />

            <label htmlFor="password" className="visually-hidden"/>
            <input type="password" id="password" name="password" placeholder="Password" />

            <label htmlFor="confirmPassword" className="visually-hidden"/>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
        </form>
        </section>
      </main>
    </>
  );
}

export default Etapa1;