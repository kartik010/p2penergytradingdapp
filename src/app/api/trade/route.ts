import { Connection, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

// Hardcoded seller & buyer wallets (replace these with actual keypairs)
const seller = Keypair.fromSecretKey(Uint8Array.from([
    // Paste your seller private key array here
]));

const buyer = Keypair.fromSecretKey(Uint8Array.from([
    // Paste your buyer private key array here
]));

export async function GET() {
    try {
        // Create a transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: seller.publicKey,
                toPubkey: buyer.publicKey,
                lamports: 1000000000, // 1 SOL
            })
        );

        // Sign and send the transaction
        const signature = await sendAndConfirmTransaction(connection, transaction, [seller]);

        return new Response(JSON.stringify({ message: "Trade Successful", signature }), { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }
        return new Response(JSON.stringify({ error: "An unknown error occurred" }), { status: 500 });
    }
}
