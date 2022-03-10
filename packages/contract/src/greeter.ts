import GreeterArtifact from "../artifacts/contracts/Greeter.sol/Greeter.json"
import { ethers } from "ethers"

const contractAddress = "xxxxxxxxxxxx"

const provider = new ethers.providers.JsonRpcProvider();
const contract = new ethers.Contract(contractAddress, GreeterArtifact.abi, provider);

export const Greeter = {
  provider,
  contract
}