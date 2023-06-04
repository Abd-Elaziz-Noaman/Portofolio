import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";

import ProjectsPic from "../../images/projects/projects2.webp";
import {
  ProjectContainer,
  AboveLayer,
  StyledImage,
} from "./ProjectsBlock.styled";
import { Container, StyledTypography } from "../About/About.styled";

export default function ProjectsBlock() {
  return (
    <Container id="Projects">
      <StyledTypography
        variant="h2"
        component="h2"
        align="center"
        mb={4}
        sx={{ fontWeight: "500" }}
        header
      >
        Projects
      </StyledTypography>
      <Grid container spacing={0}>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            // height={350}
            // width={350}
          />

          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
      </Grid>
      <br />
      <Grid container spacing={0}>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />

          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
        <ProjectContainer item lg={4} md={4} sm={4} xs={12}>
          <StyledImage
            alt="projects-pic"
            src={ProjectsPic}
            // layout="fill"
            height={350}
            width={350}
          />
          <AboveLayer>
            <h3>Project Name</h3>
            <p>My Layer Text</p>
          </AboveLayer>
        </ProjectContainer>
      </Grid>
      <br />
      <br />
    </Container>
  );
}
