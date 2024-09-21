// import { } from "ethers"
import { Contract, formatEther } from "ethers";
import data from "./data.js"
import { JsonRpcProvider, JsonRpcSigner } from "ethers";
import { Wallet } from "ethers";

async function main() {
    let contractAddress = "0xea9a0bb706c3f6701a5c7ad78f0663eef638ddd6";
    let ABI = [
        "function pushMessage(string calldata new_message) external",
        "function data() external view returns (string memory)",
    ]

    let provider = new JsonRpcProvider(data.rpc)
    // let signer = await provider.getSigner()
    const wallet = new Wallet("private key", provider);
    let contract = new Contract(contractAddress, ABI, wallet)
    const database = JSON.parse(await contract.data());
    // database.messages.push({
    //     name: "Aje Damilola",
    //     content: "I really dont like rust at all",
    //     sender: "0x654e9d96e6EF0405a49740C5F329E0c01a305322"
    // })
    // await contract.pushMessage(JSON.stringify(database))
    console.log(database)
}

main();