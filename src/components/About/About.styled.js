import styled from "styled-components";

export const SubSection = styled.div`
  & + & {
    margin-top: 4.5rem;
  }
`;

export const SkillsWrap = styled.div`
  margin-top: 0.75rem;

  & > * + * {
    margin-top: 0.35rem;
  }
`;

// Keep export for older imports used by Experience/Projects
export { SectionShell as Container, SectionTitle as StyledTypography } from "../shared/Section.styled";
