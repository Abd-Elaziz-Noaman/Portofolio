import styled from "styled-components";
import Image from "next/image";
import { Box } from "@mui/material";

export const SkillBlock = styled(Box)`
  height: 230px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light};
  box-shadow: ${({ theme }) =>
    theme.palette.mode == "light" ? "5px 5px 10px rgba(0,0,0,0.2)" : "none"};
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  @media (max-width: 400px) {
    height: 150px;
  }

  &:hover {
    background-color: #ffc86b;
    transform: translateY(-8px);
  }
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
  position: relative;

  @media (max-width: 400px) {
    height: 50px;
    width: 50px;
  }
`;

export const SkillImage = styled(Image)`
  /* border-radius: 50%; */
  // position: absolute;
  object-fit: cover;
`;
