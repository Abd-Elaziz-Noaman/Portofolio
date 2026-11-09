import styled from "styled-components";
import Link from "next/link";

export const ContactContainer = styled.div`
  width: min(1120px, calc(100% - 4rem));
  margin: 4.5rem auto 2rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
  }
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0 0 2.25rem;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: min(28%, 200px);
    height: 2px;
    background-color: ${({ theme }) => theme.palette.accent.main};

    @media (max-width: 576px) {
      width: 12%;
    }
  }

  &::before {
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    right: 0;
    transform: translateY(-50%);
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContactBlock = styled(Link)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.85rem;
  min-width: min(100%, 24rem);
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : "#3f4045"};
  color: ${({ theme }) => theme.palette.accent.text};
  padding: 1rem 1.35rem;
  border-radius: 0.75rem;
  border: 1.5px solid ${({ theme }) => theme.palette.accent.border};
  box-shadow: ${({ theme }) =>
    theme.palette.mode == "light" ? "0 2px 6px rgba(28, 25, 23, 0.07)" : "none"};
  transition: background-color 0.25s ease, border-color 0.25s ease;

  svg {
    color: ${({ theme }) => theme.palette.accent.text};
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.mode == "light" ? "#FAFAF9" : "#4b4c52"};
    border-color: ${({ theme }) => theme.palette.accent.main};
  }
`;

export const ContaxtText = styled.p`
  font-size: 1.08rem;
  color: ${({ theme }) => theme.palette.accent.text};
  letter-spacing: 0.35px;
  margin: 0;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 0.95rem;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
  margin: 2.25rem 0 0.5rem;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  margin: 0.3rem;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : "#f2f2f2"};
  display: inline-flex;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;
