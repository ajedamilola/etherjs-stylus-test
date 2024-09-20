import { JsonRpcProvider } from "ethers";
import data from "./data.js"

let walletAddress = data.wallet
let rpc_url = data.rpc;
let chain = new JsonRpcProvider(rpc_url)

async function main() {
    let balance = await chain.getBalance(walletAddress)
    console.log("My wallet balance is " + balance);
}

main()