import React, { useState, useEffect } from "react";
import Navigator from "@/components/Navigator/Navigator";
import { useTheme, useScrollTrigger, Zoom, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { MainBlock } from "./MainContainer.styled";
import PresentingBlock from "../PresentingBlock/PresentingBlock";
import About from "../About/About";
import ProjectsBlock from "../ProjectsBlock/ProjectsBlock";
import Experience from "../Experience/Experience";
import ScrollToTopBtn from "./ScrollToTopBtn/ScrollToTopBtn";

export default function MainContainer() {
  const theme = useTheme();
  console.log("🚀 ~ file: MainContainer.jsx:9 ~ MainContainer ~ theme:", theme);

  const [isVisible, setIsVisible] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainBlock theme={theme}>
      <Navigator />
      <PresentingBlock />
      <About />
      <ProjectsBlock />
      <Experience />
      <ScrollToTopBtn />
      {/* <Zoom in={trigger}>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? "visible" : "hidden",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom> */}
    </MainBlock>
  );
}
