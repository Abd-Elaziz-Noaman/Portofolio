import React from "react";
import { Grid } from "@mui/material";
import {
  LabelContainer,
  YearBlock,
  Circle,
  Label,
  DescriptionsContainer,
} from "./Stepper.styled";

export default function Stepper({ steps }) {
  return (
    <>
      {steps.reverse().map((step, index) => (
        <div key={index}>
          <LabelContainer container spacing={2} alignItems="center">
            <Grid item md={3}>
              <YearBlock>{step.year}</YearBlock>
            </Grid>
            <Grid item md={1}>
              <Circle></Circle>
            </Grid>
            <Grid item md={8}>
              <Label>{step.label}</Label>
            </Grid>
          </LabelContainer>
          {/* <LabelContainer>
            <YearBlock>{step.year}</YearBlock>
            <Circle></Circle>
            <h2 style={{ whiteSpace: "nowrap" }}>{step.label}</h2>
          </LabelContainer> */}
          <DescriptionsContainer>
            <h3 style={{ whiteSpace: "nowrap" }}>{step.subLabel}</h3>
            <br />
            <p>{step.description}</p>
          </DescriptionsContainer>
          <br />
        </div>
      ))}
    </>
  );
}
