import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';
import CatList from './pages/CatList';
import Form from './pages/Form';

function App() {
  return (
  <Provider>
      <Routes>
        <Route path="/" element={<Navigate to="/catList" replace />} />
        <Route path="/catList" element={< CatList />}/>
        <Route path="/form" element={< Form />}/>
      </Routes>
  </Provider>
  );
}

export default App;