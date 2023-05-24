import styled from "styled-components";
// import { useTheme } from "@material-ui/core/styles";

// const theme = useTheme();

export const MainBlock = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
`;

// theme.palette.mode == "light"
//           ? theme.palette.primary.dark
//           : theme.palette.primary.light
