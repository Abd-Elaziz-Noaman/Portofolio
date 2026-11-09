import React from "react";
import { Typography } from "@mui/material";

import { SkillBlock, ImageContainer, SkillImage } from "./Skill.styled";

export default function Skill(props) {
  const { title, image } = props;
  const isSvg = typeof image === "string" && image.endsWith(".svg");

  return (
    <SkillBlock>
      <ImageContainer>
        <SkillImage
          alt={title}
          src={image}
          width={72}
          height={72}
          unoptimized={isSvg}
        />
      </ImageContainer>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontSize: { md: "1.15rem", xs: "0.9rem" } }}
      >
        {title}
      </Typography>
    </SkillBlock>
  );
}
