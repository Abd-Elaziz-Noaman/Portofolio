import styled from "styled-components";
import { motion } from "framer-motion";

export const TopBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #0070f3;
  transform-origin: 0%;
  z-index: 100;
`;
