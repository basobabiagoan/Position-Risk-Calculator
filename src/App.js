import React, { useState } from 'react';

function App() {
  const [capital, setCapital] = useState(62000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entry, setEntry] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [tp1, setTP1] = useState('');
  const [tp2, setTP2] = useState('');
  const [tp3, setTP3] = useState('');
  const [tp4, setTP4] = useState('');
  const [leverage, setLeverage] = useState(10);

  const riskAmount = (capital * (riskPercent / 100));
  const stopLossDistance = Math.abs(entry - stopLoss);
  const positionSize = stopLossDistance > 0 ? riskAmount / stopLossDistance : 0;
  const marginRequired = positionSize / leverage;

  const calculateReward = (tp) =>
    tp && entry ? ((Math.abs(tp - entry) * positionSize) || 0).toFixed(2) : 0;

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2>Crypto Risk Calculator</h2>
      <label>Capital: </label>
      <input type="number" value={capital} onChange={e => setCapital(+e.target.value)} /><br />
      <label>Risk %: </label>
      <input type="number" value={riskPercent} onChange={e => setRiskPercent(+e.target.value)} /><br />
      <label>Entry Price: </label>
      <input type="number" value={entry} onChange={e => setEntry(+e.target.value)} /><br />
      <label>Stop Loss Price: </label>
      <input type="number" value={stopLoss} onChange={e => setStopLoss(+e.target.value)} /><br />
      <label>Leverage: </label>
      <input type="number" value={leverage} onChange={e => setLeverage(+e.target.value)} /><br /><br />

      <div style={{ background: '#e0f7fa', padding: 10, borderRadius: 10 }}>
        <p><strong>Risk Amount:</strong> ${riskAmount.toFixed(2)}</p>
        <p><strong>Stop Loss Distance:</strong> {stopLossDistance.toFixed(2)}</p>
        <p><strong>Position Size:</strong> {positionSize.toFixed(4)}</p>
        <p><strong>Margin Required:</strong> {marginRequired.toFixed(2)}</p>
      </div><br />

      <label>TP1: </label><input type="number" value={tp1} onChange={e => setTP1(+e.target.value)} /><br />
      <label>TP2: </label><input type="number" value={tp2} onChange={e => setTP2(+e.target.value)} /><br />
      <label>TP3: </label><input type="number" value={tp3} onChange={e => setTP3(+e.target.value)} /><br />
      <label>TP4: </label><input type="number" value={tp4} onChange={e => setTP4(+e.target.value)} /><br /><br />

      <div style={{ background: '#f1f8e9', padding: 10, borderRadius: 10 }}>
        <p><strong>Reward TP1:</strong> ${calculateReward(tp1)}</p>
        <p><strong>Reward TP2:</strong> ${calculateReward(tp2)}</p>
        <p><strong>Reward TP3:</strong> ${calculateReward(tp3)}</p>
        <p><strong>Reward TP4:</strong> ${calculateReward(tp4)}</p>
      </div>
    </div>
  );
}

export default App;