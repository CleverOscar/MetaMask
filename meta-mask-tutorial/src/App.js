import React, { useState } from 'react';
import {ethers} from 'ethers';
import MetaMask from './Wallet/MetaMask';


function App() {

  const [data, setData] = useState({
    address: '',
    balance: null,
  })


  function getWallet(e) {
    e.preventDefault();
    console.log('clicked')
      if (window.ethereum) {
        console.log("Metamask installed on broswer")

        window.ethereum.request({method: 'eth_requestAccounts'}).then(res => {
          console.log(res)
        })


      } else {
        console.log("Install Metamask Extension")
      }
  }

  return (
    <div >
      <header className="mx-auto w-full bg-gray-600/30 text-4xl text-center">
        Meta Mask Wallet Tutorial
      </header>
    

      <div className="container mx-auto">
        
        <button className="bg-blue-600 rounded-xl mt-4" onClick={getWallet}>
          Fetch Wallet Data
        </button>
        
      </div>
    </div>
  );
}

export default App;
