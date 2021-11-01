import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { injected } from './components/wallet/connectors';

import useMetaMask from './hooks/metamask';

function App() {

  const { connect, disconnect, isActive, account } = useMetaMask()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connect}>Connect to MetaMask</button>
        { isActive ? <span>Connected with {account}</span> : <span>Not Connected</span> }

        <button onClick={disconnect}>Deactivate MetaMask</button>
      </header>
    </div>
  );
}

export default App;
