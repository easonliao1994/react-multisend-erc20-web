import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli, Polygon, Mumbai, BSC,  BSCTestnet} from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // Ethereum
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
    // Polygon
    [Polygon.chainId]: 'https://polygon-rpc.com',
    [Mumbai.chainId]: 'https://rpc-mumbai.maticvigil.com',
    // BSC
    [BSC.chainId]: 'https://bsc-dataseed1.binance.org',
    [BSCTestnet.chainId]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
