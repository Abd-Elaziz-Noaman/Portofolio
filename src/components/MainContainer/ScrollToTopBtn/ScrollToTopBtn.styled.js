import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  top: 40rem;
  left: 90rem;
  height: 50px;
  width: 50px;
  /* font-size: 1.8rem; */
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  border-radius: 0.5rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  cursor: pointer;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? `${theme.palette.secondary.light}80`
        : `${theme.palette.secondary.dark}80`};
    color: ${({ theme }) =>
      theme.palette.mode == "light"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.light};
  }
`;
