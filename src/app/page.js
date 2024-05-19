"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Suspense } from "react";
import Head from "next/head";

import { ThemeContextProvider } from "../store/themeContext";
import Loading from "./loading";

export default function Home() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Head>
        <title>Abd El-Aziz Noaman - Portfolio</title>
        <meta
          name="description"
          content="Welcome to Abd El-Aziz Noaman's portfolio. Take a look?"
        />

        <meta property="og:title" content="Abd El-Aziz Noaman - Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Abd El-Aziz Noaman's portfolio. Take a look?"
        />
        <meta property="og:image" content="/public/images/my-pic.webp" />
        <meta
          property="og:url"
          content="https://abdelaziz-noaman.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="/public/images/my-pic.webp" />
        <meta name="twitter:title" content="Abd El-Aziz Noaman - Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to Abd El-Aziz Noaman's portfolio. Take a look?"
        />
        <meta name="twitter:image" content="/public/images/my-pic.webp" />
      </Head>
      <Suspense fallback={<Loading />}>
        <MainContainer />
      </Suspense>
    </ThemeContextProvider>
  );
}
