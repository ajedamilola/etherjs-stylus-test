// import { } from "ethers"
import { Contract, formatEther } from "ethers";
import data from "./data.js"
import { JsonRpcProvider, JsonRpcSigner } from "ethers";
import { Wallet } from "ethers";

async function main() {
    let contractAddress = "0x35bc8D3D5041383DCee24F9cC0053b7F24c906F1";
    let ABI = [
        "function number() external view returns (uint256)",
        "function setNumber(uint256 number) external",
        "function increment() external",
        "function decrement() external"
    ]

    let provider = new JsonRpcProvider(data.rpc)
    // let signer = await provider.getSigner()
    const wallet = new Wallet("Your secret key here", provider);
    let contract = new Contract(contractAddress, ABI, wallet)
    // const change = await contract.setNumber(BigInt(22))
    const number = await contract.number();
    // console.log(change)
    console.log(number)
}

main();