import styled from "styled-components";
import { Grid, Button } from "@mui/material";

export const BlockContainer = styled(Grid)`
  height: 100%;
  min-height: 92.2vh;
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

  & > span {
    font-size: 1.9rem;
    font-weight: bold;
    color: #ffc86b;
  }
`;

export const Title = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
`;

export const ContactMeBtn = styled(Button)`
  &.MuiButton-root {
    color: #ffc86b;
    border: 3px solid #ffc86b;
    font-weight: bold;

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
