import React, { useContext, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';

function Etapa2() {

  return (
    <>
      <main>
        <section>
        <form>
            <label htmlFor="name" className="visually-hidden"/>
            <input type="text" id="name" name="email" placeholder="Name" />

            <label htmlFor="surname" className="visually-hidden"/>
            <input type="text" id="surname" name="surname" placeholder="Surname" />

            <label htmlFor="dob" className="visually-hidden"/>
            <input type="date" id="dob" name="dob" placeholder="Confirm Password" />
        </form>
        </section>
      </main>
    </>
  );
}

export default Etapa2;