import styled from "styled-components";

export const ThankContainer = styled.div`
  min-height: 120px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark};
  color: #ffc86b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
