import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';

function App() {
  return (
  <Provider>
      <Routes>
        <Route path="/" element={<Navigate to="/catList" replace />} />
        <Route path="/catList"/>
        <Route path="/form"/>
      </Routes>
  </Provider>
  );
}

export default App;