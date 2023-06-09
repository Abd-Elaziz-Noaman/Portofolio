import styled from "styled-components";
import Link from "next/link";
import { Grid } from "@mui/material";

export const ContactContainer = styled.div`
  /* width: 80%;
  margin: auto; */
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 85%;
    height: 3px;
    background-color: #ffc86b;

    @media (max-width: 1200px) {
      width: 75%;
    }

    @media (max-width: 992px) {
      width: 70%;
    }

    @media (max-width: 768px) {
      width: 60%;
    }

    @media (max-width: 576px) {
      width: 35%;
    }
  }

  &::before {
    left: 0;
    transform: translate(-50%, -50%);
  }

  &::after {
    right: 0;
    transform: translate(50%, -50%);
  }
`;

export const SocialIconsContainer = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin: 100px;
  }
`;

export const StyledLink = styled(Link)`
  margin: 10px;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};
`;

export const ContentContainer = styled(Grid)`
  width: 60%;
  margin: auto;
  padding: 1rem 0;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    width: 87%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const ContactBlock = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light};
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  filter: brightness(90%);
  transition: filter 0.5s ease;

  &:hover {
    filter: brightness(100%);
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

export const ContaxtText = styled.p`
  font-size: 1.3rem;
  color: #ffc86b;
  letter-spacing: 1px;
  margin-left: 1rem;

  @media (max-width: 400px) {
    font-size: 1rem;
    margin-left: 0.4rem;
  }
`;
