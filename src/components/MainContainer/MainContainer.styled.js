import styled from "styled-components";
import { Button } from "@mui/material";

export const MainBlock = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
`;

export const ScrollToTopBtn = styled(Button)`
  
`