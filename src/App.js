import React from 'react';
import './App.css';
import Lottery from './lottery'
function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title="Mini Daily" numBalls={2} maxNum={100} />
    </div>
  );
}

export default App;
