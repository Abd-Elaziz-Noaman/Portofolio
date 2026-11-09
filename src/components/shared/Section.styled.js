import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const SectionShell = styled(Box)`
  width: min(1120px, calc(100% - 4rem));
  margin: 0 auto;
  padding: 5.5rem 0 1.5rem;

  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
    padding: 4rem 0 1rem;
  }

  @media (max-width: 480px) {
    width: calc(100% - 2rem);
    padding: 3.25rem 0 0.75rem;
  }
`;

export const SectionTitle = styled(Typography).withConfig({
  shouldForwardProp: (prop) => prop !== "header",
})`
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  margin: 0;
  line-height: 1.2;
  font-weight: 500;
  text-align: left;

  @media (max-width: 678px) {
    font-size: 2.2rem;
  }
`;

export const AccentRule = styled.div`
  width: 4.5rem;
  height: 4px;
  background: ${({ theme }) => theme.palette.accent.main};
  margin: 0;
  border-radius: 999px;
`;

export const BodyText = styled(Typography)`
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
  font-size: 1.2rem;
  line-height: 1.75;
  margin: 0;

  .accent-text {
    color: ${({ theme }) => theme.palette.accent.text};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;
