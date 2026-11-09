import styled from "styled-components";
import Image from "next/image";
import { Box } from "@mui/material";

export const SkillBlock = styled(Box)`
  height: 190px;
  width: 100%;
  margin: 0.75rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.secondary.light};
  box-shadow: ${({ theme }) =>
    theme.palette.mode == "light" ? "0 2px 8px rgba(28, 25, 23, 0.08)" : "none"};
  border-radius: 0.75rem;
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.accent.border
        : "rgba(255, 200, 107, 0.08)"};
  cursor: pointer;
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
  padding: 1rem 0.75rem;

  @media (max-width: 400px) {
    height: 145px;
    gap: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.accent.main};
    transform: translateY(-6px);
    color: #1c1917;
  }
`;

export const ImageContainer = styled.div`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  @media (max-width: 400px) {
    height: 48px;
    width: 48px;
  }
`;

export const SkillImage = styled(Image)`
  width: 72px !important;
  height: 72px !important;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain !important;

  @media (max-width: 400px) {
    width: 48px !important;
    height: 48px !important;
  }
`;
