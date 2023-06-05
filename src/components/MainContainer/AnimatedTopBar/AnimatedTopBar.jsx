import React, { useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

import { TopBar } from "./AnimatedTopBar.styled";

export default function AnimatedTopBar() {
  //   useEffect(() => {
  //     const updateScrollPos = () => {
  //       const scrollPosY = window.pageYOffset;
  //       const docHeight = document.body.clientHeight - window.innerHeight;
  //       const scrollPercent = scrollPosY / docHeight;
  //       setScrollPos(scrollPercent);
  //     };
  //     window.addEventListener("scroll", updateScrollPos);
  //     return () => window.removeEventListener("scroll", updateScrollPos);
  //   }, []);

  // const { scrollPos } = useScroll();
  // const springConfig = { damping: 30, mass: 2, stiffness: 200 };
  // const springProps = useSpring({
  //   width: `${scrollPos * 100}%`,
  //   config: springConfig,
  // });

  // const { scrollYProgress } = useScroll();
  // const springConfig = { damping: 30, mass: 2, stiffness: 200 };
  // const { width } = useSpring(scrollYProgress, springConfig);

  // return <motion.div style={{ scaleX: scrollYProgress }} />;

  // animated top scroll bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <TopBar style={{ scaleX }} />;
}
