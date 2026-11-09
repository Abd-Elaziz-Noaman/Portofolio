import React from "react";
import { Grid } from "@mui/material";

import {
  ProjectContainer,
  ProjectCard,
  ProjectAccent,
  ProjectTitle,
  ProjectDesc,
} from "./ProjectsBlock.styled";
import { Container, StyledTypography } from "../About/About.styled";

const projects = [
  {
    name: "Fastore Orders",
    description:
      "Order management dashboard with calculations for warehouse operations.",
    accent: "#4F8EF7",
  },
  {
    name: "Cisozen",
    description:
      "Cybersecurity product with tests, dashboards, and recommendations.",
    accent: "#2EC4B6",
  },
  {
    name: "Cybersecurity Freelancing Platform",
    description:
      "Freelance marketplace specialized in cybersecurity services.",
    accent: "#FF6B6B",
  },
  {
    name: "Medicine Market",
    description:
      "E-commerce for warehouses with real-time inventory and daily price lists.",
    accent: "#7BD67B",
  },
  {
    name: "STORYME Free Editor",
    description:
      "Editor app features for storytelling with animated visuals and sound.",
    accent: "#C084FC",
  },
  {
    name: "Technical Support App",
    description:
      "Regional support app led with a team of 3 engineers for Air Defense.",
    accent: "#FFC86B",
  },
];

export default function ProjectsBlock() {
  return (
    <Container id="Projects">
      <StyledTypography
        variant="h2"
        component="h2"
        align="center"
        mt={2}
        mb={4}
        sx={{ fontWeight: "500" }}
        header
      >
        Projects
      </StyledTypography>
      <Grid container spacing={2.5}>
        {projects.map((project) => (
          <ProjectContainer
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            key={project.name}
          >
            <ProjectCard>
              <ProjectAccent $color={project.accent} />
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
            </ProjectCard>
          </ProjectContainer>
        ))}
      </Grid>
      <br />
      <br />
    </Container>
  );
}
