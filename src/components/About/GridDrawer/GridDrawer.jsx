import React from "react";
import { Grid } from "@mui/material";
import Skill from "../Skill/Skill";

export default function GridDrawer(props) {
  const { content, spacing, ...restProps } = props;
  const IsFullRow = content.length * restProps["md"] < 12 ? false : true; // check if content take all mui row columns which are 12
  return (
    <Grid container spacing={spacing} justifyContent={!IsFullRow && "center"}>
      {content.map((element, index) => (
        <Grid item key={index} {...restProps}>
          <Skill title={element.title} image={element.image} />
        </Grid>
      ))}
    </Grid>
  );
}
