import HomePage from "@/main-app/home-page";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Houseglass web</title>
      </Head>
      <HomePage />
    </React.Fragment>
  )
}
