"use client";

import React, { useState, useEffect } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { executeTrade, fetchTradeHistory, BUYER_PUBLIC_KEY } from "@/app/lib/solana";

const TradePage = () => {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [trades, setTrades] = useState<{ signature: string; amount: number; price: number }[]>([]);
    const [amount, setAmount] = useState("");
    const price = Math.floor(Math.random() * (9 - 2 + 1) + 2);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalCost(parseFloat(amount) * price || 0);
    }, [amount, price]);

    useEffect(() => {
        async function loadTrades() {
            const tradeData = await fetchTradeHistory();
            setTrades(
                tradeData.map((trade) => ({
                    signature: trade.signature,
                    amount: Math.floor(Math.random() * (100 - 10 + 1) + 10),
                    price: Math.floor(Math.random() * (9 - 2 + 1) + 2),
                }))
            );
        }
        loadTrades();
    }, []);

    const handleTrade = async () => {
        if (!publicKey) {
            alert("Please connect your wallet!");
            return;
        }
        try {
            const transaction = await executeTrade(publicKey, BUYER_PUBLIC_KEY, parseFloat(amount));
            const signature = await sendTransaction(transaction, connection);
            alert(`Trade Successful! Transaction: ${signature}`);

            setTrades([{ signature, amount: parseFloat(amount), price }, ...trades]);
        } catch (error) {
            console.error("Trade failed:", error);
            alert("Trade failed! Check console for details.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <h1 className="text-5xl font-bold mt-10 text-neonGreen glow-effect">⚡ P2P Energy Trading</h1>

            {/* Wallet Button */}
            <div className="mt-6">
                <WalletMultiButton className="bg-neonGreen text-black px-4 py-2 rounded-full shadow-lg hover:bg-green-400 transition-all" />
            </div>

            {/* Trade Energy Card */}
            <div className="mt-8 p-6 w-3/4 max-w-lg glassmorphism text-center">
                <h2 className="text-2xl font-semibold text-neonGreen">🔋 Trade Renewable Energy</h2>

                <div className="mt-6 flex flex-col items-center space-y-4">
                    <label className="text-gray-300 text-lg">Enter Energy (kWh)</label>
                    <input
                        type="number"
                        placeholder="Amount in kWh"
                        className="p-3 w-full bg-black bg-opacity-50 border border-gray-500 rounded-lg text-center shadow-md focus:ring-2 focus:ring-neonGreen"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <label className="text-gray-300 text-lg">Price per kWh (₹)</label>
                    <input
                        type="number"
                        className="p-3 w-full bg-black bg-opacity-50 border border-gray-500 rounded-lg text-center shadow-md"
                        value={price}
                        readOnly
                    />

                    <div className="text-green-400 font-bold text-lg">Total Cost: ₹{totalCost}</div>
                </div>

                <button
                    onClick={handleTrade}
                    className="mt-6 px-6 py-3 bg-neonGreen text-black font-semibold rounded-lg w-full shadow-lg hover:bg-green-400 transition-all transform hover:scale-105"
                    disabled={!publicKey || totalCost <= 0}
                >
                    {publicKey ? `Sell Energy for ₹${totalCost}` : "Connect Wallet First"}
                </button>
            </div>

            {/* Transaction History */}
            <div className="mt-10 p-6 w-3/4 glassmorphism">
                <h2 className="text-2xl font-semibold text-neonGreen">📜 Recent Transactions</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {trades.map((trade, index) => (
                        <div key={index} className="bg-black bg-opacity-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <a
                                href={`https://explorer.solana.com/tx/${trade.signature}?cluster=devnet`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline block"
                            >
                                Tx: {trade.signature.substring(0, 6)}...{trade.signature.substring(trade.signature.length - 6)}
                            </a>
                            <p className="text-green-400 font-bold">{trade.amount} kWh @ ₹{trade.price}/kWh</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles Inside Component */}
            <style jsx>{`
                .glow-effect {
                    text-shadow: 0 0 15px #00ff99, 0 0 30px #00ff99;
                }
                .glassmorphism {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 255, 153, 0.2);
                    padding: 20px;
                }
            `}</style>
        </div>
    );
};

export default TradePage;
