import React from "react";

import HtmlCss from "public/images/skills/html-css.webp";
import JavaScript from "public/images/skills/javascript.svg.webp";
import ReactJs from "public/images/skills/reactjs.webp";
import MaterialUI from "public/images/skills/material-ui.webp";
import AntD from "public/images/skills/antd.webp";
import StyledComponents from "public/images/skills/styled-components.webp";
import Redux from "public/images/skills/redux.webp";
import ReactNative from "public/images/skills/react-native.webp";
import Git from "public/images/skills/git.webp";
import GridDrawer from "./GridDrawer/GridDrawer";
import { SectionShell, BodyText } from "../shared/Section.styled";
import SectionHeading from "../shared/SectionHeading";
import { SubSection } from "./About.styled";

const skills = [
  { title: "JavaScript", image: JavaScript },
  { title: "TypeScript", image: "/images/skills/typescript.svg" },
  { title: "HTML & CSS", image: HtmlCss },
  { title: "Node.js", image: "/images/skills/nodedotjs.svg" },
  { title: "React", image: ReactJs },
  { title: "Next.js", image: "/images/skills/nextdotjs.svg" },
  { title: "React Query", image: "/images/skills/reactquery.svg" },
  { title: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
  { title: "Redux Toolkit", image: Redux },
  { title: "Zustand", image: "/images/skills/zustand.svg" },
  { title: "Material UI", image: MaterialUI },
  { title: "Ant Design", image: AntD },
  { title: "Styled Components", image: StyledComponents },
  { title: "Git", image: Git },
  { title: "Firebase", image: "/images/skills/firebase.svg" },
  { title: "React Native (Basics)", image: ReactNative },
];

export default function About() {
  return (
    <SectionShell id="About">
      <SubSection>
        <SectionHeading>About</SectionHeading>
        <BodyText variant="h6" component="p">
          Software Engineer with 4+ years of experience building scalable web
          applications. Frontend-focused with React, Next.js, and TypeScript,
          plus full-stack exposure to Node.js, REST APIs, and databases.
          Delivered production systems across domains like{" "}
          <span className="accent-text">
            e-commerce, dashboards, telecommunications, storytelling, car
            maintenance, and cybersecurity
          </span>
          , collaborating effectively with product and engineering teams.
        </BodyText>
      </SubSection>

      <SubSection>
        <SectionHeading>Education</SectionHeading>
        <BodyText variant="h6" component="p">
          B.S. in Computer Engineering and Automatic Control — University of
          Tanta, Egypt, 2021. Total grade: Good. Graduation project grade:
          Excellent.
        </BodyText>
      </SubSection>

      <SubSection>
        <SectionHeading>My Skills</SectionHeading>
        <GridDrawer
          content={skills}
          spacing={2}
          lg={3}
          md={3}
          sm={6}
          xs={6}
        />
      </SubSection>
    </SectionShell>
  );
}
