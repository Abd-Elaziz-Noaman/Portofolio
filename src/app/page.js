"use client";

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
        <title>Abd El-Aziz Noaman — Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer with 4+ years building scalable web apps with React, Next.js, and TypeScript."
        />

        <meta
          property="og:title"
          content="Abd El-Aziz Noaman — Software Engineer"
        />
        <meta
          property="og:description"
          content="Software Engineer with 4+ years building scalable web apps with React, Next.js, and TypeScript."
        />
        <meta
          property="og:image"
          content="https://abdelaziz-noaman.vercel.app/images/my-pic.webp"
        />
        <meta
          property="og:url"
          content="https://abdelaziz-noaman.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abd El-Aziz Noaman — Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Software Engineer with 4+ years building scalable web apps with React, Next.js, and TypeScript."
        />
        <meta
          name="twitter:image"
          content="https://abdelaziz-noaman.vercel.app/images/my-pic.webp"
        />
      </Head>
      <Suspense fallback={<Loading />}>
        <MainContainer />
      </Suspense>
    </ThemeContextProvider>
  );
}
