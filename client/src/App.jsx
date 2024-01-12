import React,{ useMemo } from 'react'
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import { SolanaProvider } from './context/solanaContext.jsx'
import Header from './components/Header.jsx';
import PotCard from './components/PotCard.jsx';
import Table from './components/Table.jsx';


function App() {

  const endpoint = clusterApiUrl(WalletAdapterNetwork.Devnet);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <SolanaProvider>
          <main>
            <Header />
            <PotCard />
            <Table />
          </main>
        </SolanaProvider>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>

  )
}

export default App
