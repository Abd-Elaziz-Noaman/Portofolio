import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";

import ProjectsPic from "../../images/projects/projects2.webp";
import {
  ProjectContainer,
  AboveLayer,
  StyledImage,
} from "./ProjectsBlock.styled";
import { StyledTypography } from "../About/About.styled";
import { Container } from "../About/About.styled";

export default function ProjectsBlock() {
  return (
    <Container id="Projects">
      <StyledTypography
        variant="h2"
        component="h2"
        align="center"
        mb={4}
        sx={{ fontWeight: "500" }}
      >
        Projects
      </StyledTypography>
      <Grid container spacing={0}>
        <ProjectContainer item md={4}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            // height={350}
            // width={350}
          />

          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item md={4}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item md={4}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
      </Grid>
      <br />
      <Grid container spacing={0}>
        <ProjectContainer item md={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />

          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item md={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item md={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
      </Grid>
      <br />
      <br />
    </Container>
  );
}
