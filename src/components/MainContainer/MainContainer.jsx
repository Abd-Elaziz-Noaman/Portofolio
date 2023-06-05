import React, { useState, useEffect } from "react";
import Navigator from "@/components/Navigator/Navigator";
import { useTheme } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";

import { MainBlock } from "./MainContainer.styled";
import PresentingBlock from "../PresentingBlock/PresentingBlock";
import About from "../About/About";
import ProjectsBlock from "../ProjectsBlock/ProjectsBlock";
import Experience from "../Experience/Experience";
import ScrollToTopBtn from "./ScrollToTopBtn/ScrollToTopBtn";
import Contact from "../Contact/Contact";
import Thank from "./Thank/Thank";
import AnimatedTopBar from "./AnimatedTopBar/AnimatedTopBar";

export default function MainContainer() {
  const theme = useTheme();

  // animated top scroll bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MainBlock theme={theme}>
      <AnimatedTopBar />
      <Navigator />
      <PresentingBlock />
      <About />
      <ProjectsBlock />
      <Experience />
      <Contact />
      <Thank />
      <ScrollToTopBtn />
    </MainBlock>
  );
}
