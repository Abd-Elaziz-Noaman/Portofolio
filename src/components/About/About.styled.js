import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  padding: 2rem 12rem;
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  margin-top: 5vh;
`;
