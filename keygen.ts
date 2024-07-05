import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log(`Public key: ${kp.publicKey.toBase58()}`);
console.log(`Private key: ${kp.secretKey.toString()}`);