import styled from "styled-components";

export const ThankContainer = styled.footer`
  width: 100%;
  margin-top: 2rem;
  padding: 1.75rem 1.25rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.palette.accent.text};
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.palette.accent.border};

  & > h2 {
    margin: 0;
    font-size: 1.65rem;
    font-weight: 500;
    letter-spacing: 0.35px;
    line-height: 1.5;

    @media (max-width: 678px) {
      font-size: 1.35rem;
    }

    @media (max-width: 400px) {
      font-size: 1.15rem;
    }
  }
`;
