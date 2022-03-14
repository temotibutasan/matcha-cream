import { ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import { useContent } from "src/libs/hooks/useTodoList";
import { MatchaCreamSDK } from '@matcha-cream/contract'

interface ContentProps {
  contract: ethers.Contract
}

const Content = ({contract}: ContentProps) => {
  const { taskCount } = useContent(contract);
  return (<p>{`taskCount ... ${taskCount}`}</p>);
}

const Connect = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Counter</title>
        <script
          src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
          type="application/javascript"
        ></script>
      </head>
      <body>
        <h1>counter dapp</h1>
        <p id="account_address"></p>
        <p id="count_text"></p>
        <button id="connect">connect</button>
        <button id="inc">increment</button>
        <button id="dec">decrement</button>
        <script src="script.js"></script>
      </body>
    </html>);
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
      <Connect />
    </>
  );
};

export default Sample;
