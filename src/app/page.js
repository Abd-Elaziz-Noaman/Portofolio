"use client";

import { Suspense } from "react";
import MainContainer from "@/components/MainContainer/MainContainer";
import { ThemeContextProvider } from "../store/themeContext";
import Loading from "./loading";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<Loading />}>
        <MainContainer />
      </Suspense>
    </ThemeContextProvider>
  );
}
