import React from "react";
import { Box, Typography } from "@mui/material";
import Stepper from "./Stepper/Stepper";
import { StepperContainer } from "./Experience.styled";
import { StyledTypography } from "../About/About.styled";
// import { Box, Stepper, Step, StepLabel } from "@mui/material";

// const steps = [
//   "Select master blaster campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];
let steps = [
  {
    year: 2021,
    label: "Front-end Developer",
    subLabel: `Megadev, Tanta, FullTime. From August 2021, To Aptil 2022`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nunc, euismod vitae sagittis ut, efficitur eu lacus. Donec gravida at diam quis fringilla. Nam pretium dapibus pellentesque. Morbi vulputate purus ultrices sem posuere posuere. Maecenas risus arcu, elementum et dignissim in, vestibulum ut nisl. Integer suscipit metus a egestas sagittis. Vestibulum non urna ac eros euismod varius eu et augue.",
  },
  {
    year: 2022,
    label: "Front-end Developer",
    subLabel:
      "Sourcya, (Alexandria - Sweden), PartTime Remote. From february 2022, To May 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nunc, euismod vitae sagittis ut, efficitur eu lacus. Donec gravida at diam quis fringilla. Nam pretium dapibus pellentesque. Morbi vulputate purus ultrices sem posuere posuere. Maecenas risus arcu, elementum et dignissim in, vestibulum ut nisl. Integer suscipit metus a egestas sagittis. Vestibulum non urna ac eros euismod varius eu et augue.",
  },
  {
    year: 2023,
    label: "Front-end Developer",
    subLabel: "Freelancer. From 2020, present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nunc, euismod vitae sagittis ut, efficitur eu lacus. Donec gravida at diam quis fringilla. Nam pretium dapibus pellentesque. Morbi vulputate purus ultrices sem posuere posuere. Maecenas risus arcu, elementum et dignissim in, vestibulum ut nisl. Integer suscipit metus a egestas sagittis. Vestibulum non urna ac eros euismod varius eu et augue.",
  },
  {
    year: 2023,
    label: "First Lieutenant Rserve Officer (Software Developer)",
    subLabel: "Egyptian Armed Forces. From May 2022, present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque nunc, euismod vitae sagittis ut, efficitur eu lacus. Donec gravida at diam quis fringilla. Nam pretium dapibus pellentesque. Morbi vulputate purus ultrices sem posuere posuere. Maecenas risus arcu, elementum et dignissim in, vestibulum ut nisl. Integer suscipit metus a egestas sagittis. Vestibulum non urna ac eros euismod varius eu et augue.",
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
      >
        Experience
      </StyledTypography>
      <StepperContainer>
        <Stepper steps={steps} />
      </StepperContainer>
    </Box>
  );
}
