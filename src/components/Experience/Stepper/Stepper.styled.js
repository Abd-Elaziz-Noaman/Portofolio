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

  @media (max-width: 400px) {
    width: 100%;
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

  @media (max-width: 400px) {
    width: 50px;
    height: 34px;
    font-size: 0.9rem;
  }

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

    @media (max-width: 400px) {
      border-top: 17px solid transparent;
      border-bottom: 17px solid transparent;
      margin-top: -17px;
    }
  }
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ffc86b;
  border-radius: 50%;
  box-shadow: 0px 0px 20px #ffc86b;

  @media (max-width: 400px) {
    height: 22px;
    width: 22px;
    margin-left: 0.3rem;
  }

  @media (max-width: 400px) and (max-height: 800px) {
    margin-left: -0.3rem;
  }
`;

export const Label = styled.h2`
  width: 50vw;
  text-align: left;
  padding-left: 1rem;
  letter-spacing: 0.8px;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  @media (max-width: 768px) {
    /* width: 90%; */
    font-size: 1.2rem;
    white-space: normal;
  }

  @media (max-width: 576px) {
    /* width: 95%; */
    padding-left: 0;
    font-size: 0.9rem;
  }
`;

export const DescriptionsContainer = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  margin-left: 13px;
  padding-left: 12%;
  border-left: 5px solid
    ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  @media (max-width: 400px) {
    margin-left: 4px;
    padding-left: 1.3rem;
    padding-right: 4.8rem;
  }

  @media (max-width: 330px) {
    padding-right: 4.8rem;
  }

  & p {
    margin-top: 0.7rem;

    @media (max-width: 992px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }

    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
  }
`;

export const SubLabel = styled.h3`
  width: 50vw;
  white-space: nowrap;
  margin-top: 0.3rem;

  @media (max-width: 992px) {
    white-space: normal;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;
