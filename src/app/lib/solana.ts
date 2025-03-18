import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

export const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Hardcoded Seller & Buyer
export const SELLER_PUBLIC_KEY = new PublicKey("EUtMMVZ5w6Ku22vkcNdWoUmMCQtFu3bpqPxjqFqjJHt5");
export const BUYER_PUBLIC_KEY = new PublicKey("GLR8ZVjHvSAQfDKkJXdj93f7kGGwh6zDoW9S2WReo4Dq");

// Function to fetch transaction history
export async function fetchTradeHistory() {
    const transactions = await connection.getSignaturesForAddress(SELLER_PUBLIC_KEY);
    return transactions;
}

// Function to send SOL from Seller → Buyer
export async function executeTrade(sender: PublicKey, receiver: PublicKey, amount: number) {
    try {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: sender,
                toPubkey: receiver,
                lamports: amount * 1e9, // Convert SOL to lamports
            })
        );
        return transaction;
    } catch (error) {
        console.error("Trade failed:", error);
        throw error;
    }
}
