import styled from "styled-components";
import Link from "next/link";

export const ContactContainer = styled.div`
  /* width: 80%;
  margin: auto; */
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 85%;
    height: 3px;
    background-color: #ffc86b;
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
`;
