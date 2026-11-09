import React from "react";
import Navigator from "@/components/Navigator/Navigator";
import { useTheme } from "@mui/material";

import { MainBlock } from "./MainContainer.styled";
import PresentingBlock from "../PresentingBlock/PresentingBlock";
import About from "../About/About";
import Experience from "../Experience/Experience";
import ScrollToTopBtn from "./ScrollToTopBtn/ScrollToTopBtn";
import Contact from "../Contact/Contact";
import Thank from "./Thank/Thank";
import AnimatedTopBar from "./AnimatedTopBar/AnimatedTopBar";

export default function MainContainer() {
  const theme = useTheme();

  return (
    <MainBlock theme={theme}>
      <AnimatedTopBar />
      <Navigator />
      <PresentingBlock />
      <About />
      <Experience />
      <Contact />
      <Thank />
      <ScrollToTopBtn />
    </MainBlock>
  );
}
