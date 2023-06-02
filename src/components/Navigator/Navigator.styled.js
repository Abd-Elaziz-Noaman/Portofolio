import styled from "styled-components";
import { Box, AppBar, MenuItem, Button } from "@mui/material";

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
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiBox-root.MuiButtonBase-root.MuiButton-root {
    color: black;
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
    margin: 1rem 2rem;
    font-weight: bold;
  }
`;
