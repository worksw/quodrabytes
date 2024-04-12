"use client"
import Head from "next/head";
import Service from "./components/home/service";
import Banner from "./components/home/banner";
import About from "./components/about";
import Example from "./components/home/slider";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title className="text-white">Quadra Bytes</title>
      </Head>
      <Banner />
      <About/>
      <Service />
      <Example/>
    </div>
  );
}
