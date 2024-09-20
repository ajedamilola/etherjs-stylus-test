const ethers = require("ethers");

const INFURA_ID = ''
const provider = new ethers.JsonRpcProvider(`https://sepolia-rollup-sequencer.arbitrum.io/rpc`)

const address = '0x654e9d96e6EF0405a49740C5F329E0c01a305322'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`)
}

main()