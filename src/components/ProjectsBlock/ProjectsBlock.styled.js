import styled from "styled-components";
import { Grid, Box } from "@mui/material";

export const ProjectContainer = styled(Grid)`
  position: relative;
  min-height: 210px;
  cursor: default;
`;

export const ProjectCard = styled(Box)`
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 210px;
  width: 100%;
  padding: 1.75rem 1.5rem 1.5rem;
  border-radius: 0.85rem;
  background-color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.light
      : theme.palette.secondary.dark};
  color: ${({ theme }) =>
    theme.palette.mode == "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light};
  border: 1px solid rgba(255, 200, 107, 0.14);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 200, 107, 0.35);
  }
`;

export const ProjectAccent = styled.div`
  width: 2.75rem;
  height: 0.3rem;
  border-radius: 999px;
  background-color: ${({ $color }) => $color || "#ffc86b"};
  margin-bottom: 1.15rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 0.85rem;
  font-size: 1.28rem;
  font-weight: 600;
  line-height: 1.35;
`;

export const ProjectDesc = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.9;
`;
