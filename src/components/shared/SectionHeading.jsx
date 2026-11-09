import React from "react";
import styled from "styled-components";
import { SectionTitle, AccentRule } from "./Section.styled";

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
  margin: 0 0 1.75rem;
`;

export default function SectionHeading({ children }) {
  return (
    <Heading>
      <SectionTitle variant="h2" component="h2" header>
        {children}
      </SectionTitle>
      <AccentRule />
    </Heading>
  );
}
