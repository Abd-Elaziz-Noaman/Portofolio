import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

import { SkillBlock, ImageContainer, SkillImage } from "./Skill.styled";

export default function Skill(props) {
  const { title, image, width, height } = props;
  return (
    <SkillBlock>
      <ImageContainer>
        <SkillImage alt={title} src={image} layout="fill" />
      </ImageContainer>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontSize: { md: "1.3rem", xs: "0.9rem" } }}
      >
        {title}
      </Typography>
    </SkillBlock>
  );
}
