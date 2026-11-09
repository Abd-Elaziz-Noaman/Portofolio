import styled from "styled-components";
import { Box, AppBar, Button } from "@mui/material";

export const ModeIconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 400px) {
    height: 35px;
    width: 35px;
  }
`;

export const StyledAppBar = styled(AppBar)`
  &.MuiPaper-root {
    height: 9vh;
    background-color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.primary.light
        : theme.palette.primary.dark};
    color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.light};
    box-shadow: none;

    @media (max-width: 400px) {
      height: 10vh;
    }

    @media (max-width: 400px) and (max-height: 800px) {
      height: 8.2vh;
    }
  }
`;

export const NavButtonsContainer = styled(Box)`
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.light};
    margin: 0.85rem 1.25rem;
    font-weight: bold;
    letter-spacing: 0.4px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  border-radius: 0.65rem;
  overflow: hidden;
  background: ${({ theme }) =>
    theme.palette.mode == "light" ? "#FFFFFF" : "rgba(255,255,255,0.04)"};
  border: 1px solid ${({ theme }) => theme.palette.accent.border};
  padding: 0.15rem 0.35rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.palette.accent.main};
    transform: translateY(-1px);
  }

  img {
    object-fit: contain !important;
  }
`;
