// SolanaContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Connection } from '@solana/web3.js';

// Create the Solana context
export const SolanaContext = createContext();

// Solana provider component
export const SolanaProvider = ({ children }) => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    // Establish connection to the Solana network
    const establishConnection = async () => {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      setConnection(connection);
    };

    establishConnection();
  }, []);

  return (
    <SolanaContext.Provider value={{ connection }}>
      {children}
    </SolanaContext.Provider>
  );
};


