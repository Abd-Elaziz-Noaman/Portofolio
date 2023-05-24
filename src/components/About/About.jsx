import React from "react";
import { Typography, Grid } from "@mui/material";

import { Container } from "./About.styled";
import Skill from "./Skill/Skill";

import HtmlCss from "../../images/skills/html-css.png";
import JavaScript from "../../images/skills/javascript.svg.png";
import ReactJs from "../../images/skills/reactjs.png";
import Bootstrap from "../../images/skills/bootstrap.png";
import MaterialUI from "../../images/skills/material-ui.png";
import AntD from "../../images/skills/antd.png";
import StyledComponents from "../../images/skills/styled-components.png";
import Redux from "../../images/skills/redux.png";
import ReactNative from "../../images/skills/react-native.png";
import Git from "../../images/skills/git.png";
import NextJs from "../../images/skills/nextjs.png";
import GridDrawer from "./GridDrawer/GridDrawer";

const SkillsGrid_1 = [
  { title: "HTML & CSS", image: HtmlCss },
  { title: "JavaScript", image: JavaScript },
  { title: "React JS", image: ReactJs },
  { title: "Bootstrap", image: Bootstrap },
];

const SkillsGrid_2 = [
  { title: "Material UI", image: MaterialUI },
  { title: "Ant Design", image: AntD },
  { title: "Styled Components", image: StyledComponents },
  { title: "Redux", image: Redux },
];

const SkillsGrid_3 = [
  { title: "React Native (Basics)", image: ReactNative },
  { title: "Git Source Control", image: Git },
  { title: "Next Js", image: NextJs },
];

export default function About() {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        mt={2}
        mb={4}
        sx={{ fontWeight: "500" }}
      >
        About
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={1} sx={{ borderTop: "4px solid #ffc86b" }}></Grid>
        <Grid item md={11}>
          <Typography variant="h6" component="p" mt={-3}>
            I am a web developer with an amazing ability to develop websites
            that are both functional and aesthetically pleasing. I have a strong
            understanding of web standards and best practices, and I am
            passionate about creating websites that users will find easy to use
            and visually appealing. I am also proficient in a variety of
            programming languages and tools,
            <span style={{ color: "#ffc86b" }}>
              &nbsp; and I have a proven track record of delivering successful
              projects &nbsp;
            </span>
            on time and within budget. I am a team player who is always willing
            to lend a helping hand, and I am confident in my ability to
            contribute to any project.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="h2"
        component="h2"
        align="center"
        mt={10}
        sx={{ fontWeight: "500" }}
      >
        My Skills
      </Typography>
      <GridDrawer
        content={SkillsGrid_1}
        spacing={2}
        lg={3}
        md={3}
        sm={6}
        xs={12}
      />
      <GridDrawer
        content={SkillsGrid_2}
        spacing={2}
        lg={3}
        md={3}
        sm={6}
        xs={12}
      />
      <GridDrawer
        content={SkillsGrid_3}
        spacing={2}
        lg={3}
        md={3}
        sm={6}
        xs={12}
      />
    </Container>
  );
}