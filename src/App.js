// src/App.js
import React, { useState } from 'react';
import RiskCalculator from './RiskCalculator';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Position Risk Calculator</h1>
      <RiskCalculator />
    </div>
  );
}

export default App;
