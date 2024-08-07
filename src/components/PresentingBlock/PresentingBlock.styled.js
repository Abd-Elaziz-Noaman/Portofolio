import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";

export const BlockContainer = styled(Grid)`
  height: 100%;
  min-height: 92.2vh;
  margin-top: 5vh;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }

  @media (max-width: 400px) and (max-height: 800px) {
    margin-top: -6vh;
    margin-bottom: 3.7rem;
  }

  @media (max-width: 330px) {
    margin-top: 3vh;
  }
`;

export const LeftGrid = styled(Grid)`
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  & > div {
    padding: 0 12rem;

    @media (max-width: 900px) {
      padding: 0 10rem;
      /* margin: auto; */
      margin-top: 1.7rem;
    }

    @media (max-width: 400px) {
      padding-left: 0.5rem;
      margin-top: 1rem;
    }

    @media (max-width: 400px) and (max-height: 800px) {
      padding-left: 0;
      margin-left: 2.8rem;
    }

    @media (max-width: 330px) {
      padding-left: 0.5rem;
      margin-left: auto;
    }
  }
`;

export const RightGrid = styled(Grid)`
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Name = styled.p`
  font-size: 1.7rem;
  margin-bottom: 0.5rem;

  @media (max-width: 678px) {
    font-size: 1.4rem;
  }

  & > span {
    font-size: 1.9rem;
    font-weight: bold;
    color: #ffc86b;

    @media (max-width: 678px) {
      font-size: 1.5rem;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;

  @media (max-width: 678px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

export const ContactMeBtn = styled(Button)`
  &.MuiButton-root {
    color: #ffc86b;
    border: 3px solid #ffc86b;
    font-weight: bold;

    @media (max-width: 678px) {
      font-size: 0.8rem;
    }

    &:hover {
      border: 3px solid #ffc86b;
      background-color: #ffc86b;
      color: ${({ theme }) =>
        theme.palette.mode == "light"
          ? theme.palette.primary.light
          : theme.palette.primary.dark};
    }
  }
`;

export const ImageAnimationContainer = styled(motion.div)`
  /* position: fixed; */
`;

export const StyledImage = styled(Image)`
  height: 40rem;
  width: 40rem;
  filter: drop-shadow(
    0px 0px 5px
      ${({ theme }) =>
        theme.palette.mode == "light"
          ? theme.palette.primary.dark
          : theme.palette.primary.light}
  );

  @media (max-width: 768px) {
    height: 30rem;
    width: 30rem;
    margin: auto;
  }

  @media (max-width: 400px) {
    height: 20rem;
    width: 20rem;
    margin-left: 0;
  }
`;
