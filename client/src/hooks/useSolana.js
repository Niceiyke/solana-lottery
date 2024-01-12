import { useContext } from "react";
import { SolanaContext } from "../context/solanaContext";
// Solana hook to access the context
export const useSolana = () => {
    const context = useContext(SolanaContext);
    if (!context) {
      throw new Error('useSolana must be used within a SolanaProvider');
    }
    return context;
  };