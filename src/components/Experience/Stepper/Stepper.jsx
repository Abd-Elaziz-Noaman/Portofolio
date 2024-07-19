import React from "react";
import { Grid } from "@mui/material";
import {
  LabelContainer,
  YearBlock,
  Circle,
  Label,
  DescriptionsContainer,
  SubLabel,
} from "./Stepper.styled";

export default function Stepper({ steps }) {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index}>
          <LabelContainer container spacing={2} alignItems="center">
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <YearBlock>{step.year}</YearBlock>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1}>
              <Circle></Circle>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8}>
              <Label>{step.label}</Label>
            </Grid>
          </LabelContainer>
          {/* <LabelContainer>
            <YearBlock>{step.year}</YearBlock>
            <Circle></Circle>
            <h2 style={{ whiteSpace: "nowrap" }}>{step.label}</h2>
          </LabelContainer> */}
          <LabelContainer container spacing={2} alignItems="center">
            <Grid item lg={3} md={3} sm={3} xs={3}></Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
              <DescriptionsContainer>
                <SubLabel>{step.subLabel}</SubLabel>
                <ul
                  style={{
                    width: "50vw",
                    marginLeft: "15px",
                    marginTop: "15px",
                  }}
                >
                  {step.description.map((ele, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      <p>{ele}</p>
                    </li>
                  ))}
                </ul>
              </DescriptionsContainer>
              <br />
            </Grid>
          </LabelContainer>
        </div>
      ))}
    </>
  );
}
