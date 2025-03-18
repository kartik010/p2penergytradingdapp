// src/lib/utils.tsx

interface SolanaWindow extends Window {
  solana?: {
    isPhantom?: boolean;
    connect: () => Promise<{ publicKey: PublicKey }>;
  };
}

declare const window: SolanaWindow;

import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

// Connect to Solana's mainnet endpoint
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

// Function to get the balance from Phantom Wallet
export const getBalance = async (address: string) => {
  const publicKey = new PublicKey(address);
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; // Convert lamports to SOL
};

// Function to check if Phantom Wallet is connected
export const isPhantomConnected = async () => {
  if (window.solana && window.solana.isPhantom) {
    const response = await window.solana.connect();
    return response.publicKey.toString(); // Return the public key of the connected wallet
  } else {
    throw new Error("Phantom Wallet not found. Please install Phantom Wallet.");
  }
};

// Simulate energy trade
export const tradeEnergy = async (buyerAddress: string, sellerAddress: string, amount: number) => {
  const buyerPublicKey = new PublicKey(buyerAddress);
  const sellerPublicKey = new PublicKey(sellerAddress);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: buyerPublicKey,
      toPubkey: sellerPublicKey,
      lamports: amount * 1e9, // Convert SOL to lamports
    })
  );

  return transaction;
};
