import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Menu from "../components/menu";
import Header from "../components/header";
import Hero from "../components/main-page/hero";
import About from "../components/main-page/about";
import Portfolio from "../components/main-page/portfolio";
import Contacts from "../components/main-page/contacts";
import Footer from "../components/main-page/footer";
import Gotop from "../components/goTopArrow";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full bg-DarkGray dark:bg-white scroll-smooth font-Consolas snap-mandatory snap-y">
      <Head>
        <title>MinsungK</title>
        <link rel="icon" href="/device.svg" />
      </Head>
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Hero />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />

      <Gotop menuIsOpen={menuIsOpen} />
    </div>
  );
}
