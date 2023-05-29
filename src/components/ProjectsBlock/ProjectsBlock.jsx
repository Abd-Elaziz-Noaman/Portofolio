import React from "react";
import { Typography, Grid } from "@mui/material";

import ProjectsPic from "../../images/projects/projects.jpg";
import { ProjectContainer, StyledImage } from "./ProjectsBlock.styled";
import { Container } from "../About/About.styled";

export default function ProjectsBlock() {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        mb={4}
        sx={{ fontWeight: "500" }}
      >
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <ProjectContainer item md={4}>
          <StyledImage alt="projects-pic" src={ProjectsPic} layout="fill" />
        </ProjectContainer>
        <ProjectContainer item md={4}>
          <StyledImage alt="projects-pic" src={ProjectsPic} layout="fill" />
        </ProjectContainer>
        <ProjectContainer item md={4}>
          <StyledImage alt="projects-pic" src={ProjectsPic} layout="fill" />
        </ProjectContainer>
      </Grid>
      <br />
    </Container>
  );
}
