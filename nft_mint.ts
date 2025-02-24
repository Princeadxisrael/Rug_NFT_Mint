import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createSignerFromKeypair, signerIdentity, generateSigner, percentAmount } from "@metaplex-foundation/umi"
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import wallet from "./wba-wallet.json"
import base58 from "bs58";

const RPC_ENDPOINT = "https://api.devnet.solana.com";
const umi = createUmi(RPC_ENDPOINT);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata())

const mint = generateSigner(umi);

// https://arweave.net/lnN3U2uwNcyEnjZ7jImIxWM8MCNx5ECQYx202p0D-Jk

(async () => {
    // let tx = ???
    // let result = await tx.sendAndConfirm(umi);
    // const signature = base58.encode(result.signature);

    let tx = createNft(umi, {
        mint,
        name: "RUG109",
        symbol: "RUG109",
        uri: " https://arweave.net/tZCij2HlIcvrQUNlc3Y2hW60_KlN4uwunZtsTS0rq7o?ext=png",
        sellerFeeBasisPoints: percentAmount(1),     // 0-10,000
        creators: null,
    });
    let result = await tx.sendAndConfirm(umi);
    const signature = base58.encode(result.signature);
    
    console.log(`Succesfully Minted! Check out your TX here:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)

    console.log("Mint Address: ", mint.publicKey);
    // https://explorer.solana.com/tx/Nv1Fioq6ayNJZXYc1soiUCQqCBGRRua2f6yFVRnYyWYHtXpfnWbqjoz9rtinKr9CS1tsa8RHkMUCFpwYTrjTAih?cluster=devnet
// Mint Address:  eZM6xJUqrTWvgsNezGhDLgHXYxzyTHiE7ivphLabrDv
})();

