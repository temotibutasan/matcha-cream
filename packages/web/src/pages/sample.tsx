import { MatchaCreamSDK } from "@matcha-cream/contract";
import { ethers } from "ethers";
import { NextPage } from "next";
import Head from "next/head";
import { useContent } from "src/libs/hooks/useTodoList";
import { UseWallet } from "src/libs/hooks/useWallet";


interface ContentProps {
  contract: ethers.Contract
}

const Content = ({contract}: ContentProps) => {
  const { taskCount } = useContent(contract);
  return (<p>{`taskCount ... ${taskCount}`}</p>);
}

const WalletConnect = () => {
  const { connect, disconnect, isActive, walletAccount } = UseWallet();
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
      {isActive ? <span>Connected with <b>{walletAccount}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
    </div>
  );
}

const Sample: NextPage = () => {
  return (
    <>
      <Head>
        <title>MATCHA CREAM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>sample</h1>
      <Content contract={MatchaCreamSDK.TodoList.contract} />
      <WalletConnect />
    </>
  );
};

export default Sample;
