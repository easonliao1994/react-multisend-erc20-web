import './App.css';
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

export function App() {
    const { activateBrowserWallet, deactivate, account, chainId } = useEthers()
    const userBalance = useEtherBalance(account)
    let currencySymbol = 'ETH';
    if (chainId === 137 || chainId === 80001) {
        currencySymbol = 'MATIC';
    } else if (chainId === 56 || chainId === 97) {
        currencySymbol = 'BNB';
    }
  
    return (
      <div>
        {!account && <button onClick={activateBrowserWallet}> Connect </button>}
        {account && <button onClick={deactivate}> Disconnect </button>}
        {account && <p>Account: {account}</p>}
        {userBalance && <p>Ether balance: {formatEther(userBalance)} {currencySymbol} </p>}
      </div>
    )
  }