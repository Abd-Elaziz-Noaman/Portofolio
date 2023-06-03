import styled from "styled-components";
import { Grid } from "@mui/material";

export const LabelContainer = styled(Grid)`
  width: 50%;

  @media (max-width: 992px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;

// export const LabelContainer = styled.div`
//   width: 150%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   /* & + & {
//     margin-right: 20px;
//   } */
//   &:nth-child(1) {
//     margin-right: 100px;
//   }
//   &:nth-child(2) {
//     margin-right: 100px;
//   }
// `;

export const YearBlock = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    width: 0;
    height: 0;
    margin-top: -25px;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 20px solid
      ${({ theme }) =>
        theme.palette.mode == "light"
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark};
  }
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ffc86b;
  border-radius: 50%;
  box-shadow: 0px 0px 20px #ffc86b;
`;

export const Label = styled.h2`
  text-align: left;
  white-space: nowrap;
  padding-left: 1rem;
  letter-spacing: 0.8px;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  @media (max-width: 992px) {
    /* width: 75%; */
    /* white-space: normal; */
  }

  @media (max-width: 768px) {
    /* width: 90%; */
    white-space: normal;
  }

  @media (max-width: 576px) {
    /* width: 95%; */
  }
`;

export const DescriptionsContainer = styled.div`
  height: auto;
  width: 70%;
  margin: auto;
  margin-left: 9.3rem;
  /* margin-left: 16%; */
  padding-left: 3rem;
  border-left: 5px solid
    ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  @media (max-width: 1200px) {
    width: 80%;
    margin-left: 8rem;
  }

  @media (max-width: 992px) {
    width: 85%;
    margin-left: 9.8rem;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin-left: 7.8rem;
  }

  @media (min-width: 630px) and (max-width: 768px) {
    margin-left: 9rem;
  }

  /* @media (max-width: 576px) {
    width: 85%;
  } */
`;

export const SubLabel = styled.h3`
  white-space: nowrap;

  @media (max-width: 992px) {
    white-space: normal;
  }
`;
