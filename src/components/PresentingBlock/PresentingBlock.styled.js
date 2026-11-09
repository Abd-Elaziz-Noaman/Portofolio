import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";

export const BlockContainer = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  padding: 9vh 0 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    padding-top: 10vh;
    padding-bottom: 3rem;
  }
`;

export const HeroInner = styled.div`
  width: min(1120px, calc(100% - 4rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 900px) {
    width: calc(100% - 2.5rem);
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 1.75rem;
  }
`;

export const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 0;

  @media (max-width: 900px) {
    order: 2;
    align-items: center;
  }
`;

export const HeroMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    order: 1;
  }
`;

export const Name = styled.p`
  font-size: 1.7rem;
  margin: 0 0 0.35rem;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  min-height: 2.4rem;

  @media (max-width: 678px) {
    font-size: 1.35rem;
  }

  .accent {
    font-size: 1.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.accent.text};

    @media (max-width: 678px) {
      font-size: 1.45rem;
    }
  }

  .typed-cursor {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.accent.text};
    animation: typedBlink 0.7s step-end infinite;
  }

  @keyframes typedBlink {
    50% {
      opacity: 0;
    }
  }
`;

export const Title = styled.p`
  margin: 0 0 1.5rem;
  min-height: 1.2em;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const ContactMeBtn = styled(Button)`
  &.MuiButton-root {
    color: ${({ theme }) => theme.palette.accent.text};
    border: 2px solid ${({ theme }) => theme.palette.accent.text};
    font-weight: 700;

    &:hover {
      border: 2px solid ${({ theme }) => theme.palette.accent.main};
      background-color: ${({ theme }) => theme.palette.accent.main};
      color: ${({ theme }) =>
        theme.palette.mode == "light" ? "#1C1917" : theme.palette.primary.dark};
    }
  }
`;

export const DownloadCvBtn = styled(Button)`
  &.MuiButton-root {
    color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.light};
    border: 2px solid
      ${({ theme }) =>
        theme.palette.mode == "light"
          ? theme.palette.primary.dark
          : theme.palette.primary.light};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      border: 2px solid ${({ theme }) => theme.palette.accent.main};
      background-color: ${({ theme }) => theme.palette.accent.main};
      color: ${({ theme }) =>
        theme.palette.mode == "light" ? "#1C1917" : theme.palette.primary.dark};
    }
  }
`;

export const StyledImage = styled(Image)`
  width: min(100%, 26rem);
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: ${({ theme }) =>
    theme.palette.mode == "light"
      ? "0 0 0 5px rgba(139, 90, 0, 0.12)"
      : "0 0 0 5px rgba(255, 200, 107, 0.14)"};

  @media (max-width: 900px) {
    width: min(70vw, 17rem);
  }
`;
