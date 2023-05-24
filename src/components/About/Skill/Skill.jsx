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
      <Typography variant="h6" component="p">
        {title}
      </Typography>
    </SkillBlock>
  );
}
