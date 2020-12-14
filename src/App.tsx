import React, { useState } from 'react';
import './App.css';
import Explode from './components/explode/Explode';
import FancyButton from './components/fancyButton/FancyButton';
import { BoomProvider } from './context/BoomContext.js';
import Portal from './pages/Portal';


function App() {
  const [boom, setBoom] = useState(false);
  return (
    <BoomProvider value={[boom, setBoom]}>
      <div className="app">
        <Portal>
          <FancyButton name="Boom"></FancyButton>
          <Explode></Explode>
        </Portal>
      </div>
    </BoomProvider>
  )
}

export default App;
