import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useState } from "react";
import Menu from "../components/menu";
import Header from "../components/menu/header";
import SideInfo from "../components/sideInfo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>MinsungK</title>
        <meta name="MinsungK" content="</> by Minsung using Next.JS and TailwindCSS" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <SideInfo />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} selected={selected} setSelected={setSelected} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} selected={selected} setSelected={setSelected} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
