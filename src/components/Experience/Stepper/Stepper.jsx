import React from "react";
import {
  Timeline,
  TimelineItem,
  YearBlock,
  Rail,
  Dot,
  Content,
  Label,
  SubLabel,
} from "./Stepper.styled";

export default function Stepper({ steps }) {
  return (
    <Timeline>
      {steps.map((step, index) => (
        <TimelineItem key={`${step.year}-${step.label}-${index}`}>
          <YearBlock>{step.year}</YearBlock>
          <Rail>
            <Dot />
          </Rail>
          <Content>
            <Label>{step.label}</Label>
            <SubLabel>{step.subLabel}</SubLabel>
            <ul>
              {step.description.map((ele, descIndex) => (
                <li key={descIndex}>
                  <p>{ele}</p>
                </li>
              ))}
            </ul>
          </Content>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
