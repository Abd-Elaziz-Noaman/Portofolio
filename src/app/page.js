"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeContextProvider } from "../store/themeContext";

export default function Home() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <MainContainer />
    </ThemeContextProvider>
  );
}
