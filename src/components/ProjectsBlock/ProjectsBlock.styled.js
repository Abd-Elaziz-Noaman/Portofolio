import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import Image from "next/image";

export const ProjectContainer = styled(Grid)`
  position: relative;
  height: 350px;
  width: 200px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 600px) {
    height: 400px;
    margin-bottom: 1.4rem;
  }

  @media (max-width: 400px) {
    height: 300px;
    margin-bottom: 1.4rem;
    margin-left: 1rem;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 250px;
  }

  @media (max-width: 600px) {
    margin-top: 400px;
  }

  @media (max-width: 400px) {
    margin-top: 300px;
  }

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
