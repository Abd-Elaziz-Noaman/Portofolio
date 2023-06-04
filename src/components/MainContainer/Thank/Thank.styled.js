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

  @media (max-width: 400px) {
    min-height: 80px;
    text-align: center;
  }

  & > h2 {
    @media (max-width: 678px) {
      font-size: 1.1rem;
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;
