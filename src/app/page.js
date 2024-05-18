"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Suspense } from "react";

import { ThemeContextProvider } from "../store/themeContext";
import Loading from "./loading";

export default function Home() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <MainContainer />
      </Suspense>
    </ThemeContextProvider>
  );
}
