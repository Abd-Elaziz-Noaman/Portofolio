import styled from "styled-components";

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 5.5rem 1.5rem minmax(0, 1fr);
  column-gap: 1rem;
  align-items: stretch;

  @media (max-width: 700px) {
    grid-template-columns: 3.6rem 1.15rem minmax(0, 1fr);
    column-gap: 0.65rem;
  }
`;

export const YearBlock = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.secondary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  /* Arrow tip on the right, pointing toward the timeline dot */
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 50%,
    calc(100% - 20px) 100%,
    0 100%
  );
  padding-right: 0.7rem;

  @media (max-width: 700px) {
    height: 34px;
    font-size: 0.82rem;
    clip-path: polygon(
      0 0,
      calc(100% - 14px) 0,
      100% 50%,
      calc(100% - 14px) 100%,
      0 100%
    );
    padding-right: 0.5rem;
  }
`;
export const Rail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 0.85rem;

  &::before {
    content: "";
    position: absolute;
    top: 1.4rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: ${({ theme }) =>
      theme.palette.mode == "light"
        ? "rgba(139, 90, 0, 0.28)"
        : "rgba(255, 200, 107, 0.35)"};
  }

  ${TimelineItem}:last-child &::before {
    display: none;
  }
`;

export const Dot = styled.div`
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.accent.main};
  box-shadow: ${({ theme }) =>
    theme.palette.mode == "light"
      ? "0 0 0 3px rgba(139, 90, 0, 0.12)"
      : "0 0 12px rgba(255, 200, 107, 0.5)"};
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  min-width: 0;
  padding-bottom: 1.85rem;
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.primary.dark
      : theme.palette.primary.light};

  ul {
    margin: 0.55rem 0 0;
    padding-left: 1.15rem;
  }

  li {
    margin-bottom: 0.45rem;
  }

  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.7;
    opacity: 0.92;

    @media (max-width: 700px) {
      font-size: 0.95rem;
    }
  }
`;

export const Label = styled.h2`
  margin: 0.15rem 0 0.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.3px;

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
`;

export const SubLabel = styled.h3`
  margin: 0;
  font-size: 1.02rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.accent.text};

  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;
