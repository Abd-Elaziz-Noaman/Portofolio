import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import Image from "next/image";

export const ProjectContainer = styled(Grid)`
  position: relative;
  height: 350px;
  width: 200px;
  /* z-index: -1; */
  /* transition: all 0.5s ease-in-out; */
`;

export const AboveLayer = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 95%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-top: 350px;
  transition: all 0.7s ease;
  cursor: pointer;

  ${ProjectContainer}:hover & {
    visibility: visible;
    height: 100%;
    margin-top: 0;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 95%;
`;
