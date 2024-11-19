'use client'
import Layout from "@/components/layout";
import Mint from "@/components/mint";
import NotConnected from "@/components/notConnected";
import {useAccount} from "wagmi";

export default function Home() {

  const {address, isConnected} = useAccount()

  return (
    <Layout>
      {isConnected ? (
        <Mint />
      ) : (
        <NotConnected />
      )}
    </Layout>
  );
}
