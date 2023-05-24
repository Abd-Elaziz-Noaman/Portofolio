import React from "react";
import Navigator from "@/components/Navigator/Navigator";
import { useTheme } from "@mui/material";

import { MainBlock } from "./MainContainer.styled";
import PresentingBlock from "../PresentingBlock/PresentingBlock";
import About from "../About/About";

export default function MainContainer() {
  const theme = useTheme();
  console.log("🚀 ~ file: MainContainer.jsx:9 ~ MainContainer ~ theme:", theme);

  return (
    <MainBlock theme={theme}>
      <Navigator />
      <PresentingBlock />
      <About />
    </MainBlock>
  );
}
