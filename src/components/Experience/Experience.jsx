import React from "react";
import { Box } from "@mui/material";
import Stepper from "./Stepper/Stepper";
import { StepperContainer } from "./Experience.styled";
import { StyledTypography } from "../About/About.styled";

let steps = [
  {
    year: 2020,
    label: "Frontend Developer",
    subLabel: "Freelancer. From 2020, present",
    description: [
      "Participated in several projects focusing on delivering high quality projects in time.",
      "Accomplished a Freelancing Platform specialized in Cyber Security.",
    ],
  },
  {
    year: 2021,
    label: "Frontend Developer",
    subLabel: `Megadev, Tanta, Egypt, FullTime. From August 2021, To Aptil 2022`,
    description: [
      "Participated in several projects, the most important was an medicine market app for warehouses.",
      "Accomplished several landing pages.",
    ],
  },
  {
    year: 2022,
    label: "Frontend Developer",
    subLabel:
      "Sourcya, (Alexandria - Sweden), PartTime Remote. From february 2022, To May 2022",
    description: [
      "Participated in 80 – 85% of [ Fastore Orders ] App, it’s a dashboard to manage orders and doing some calculations.",
      "Contributed to [ Cisozen ] App, it’s an Australian cyber security startup, Website has tests, dashboard and recommendations.",
    ],
  },
  {
    year: 2023,
    label: "First Lieutenant Rserve Officer (Software Developer)",
    subLabel: "Egyptian Armed Forces. From May 2022, present",
    description: [
      "Working on ERP systems and generating reports.",
      "Participated in Air defense forces main website.",
      "Participated in Technical support app.",
    ],
  },
  {
    year: 2024,
    label: "Frontend Engineer",
    subLabel:
      "STORYME, Ramallah, West Bank, FullTime Remote. From April 2024, present",
    description: [],
  },
];

steps = [...steps].reverse();

export default function Experience() {
  return (
    <Box id="Experience" sx={{ width: "90%", margin: "auto" }}>
      <StyledTypography
        variant="h2"
        component="h2"
        mt={2}
        mb={4}
        sx={{ fontWeight: "500" }}
        header
      >
        Experience
      </StyledTypography>
      <StepperContainer>
        <Stepper steps={steps} />
      </StepperContainer>
    </Box>
  );
}
