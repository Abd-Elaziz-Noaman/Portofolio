import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  padding: 2rem 12rem;

  @media (max-width: 1200px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 5rem;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  margin-top: 5vh;
`;
