import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

import MyPic from "../../images/my-pic.webp";

import {
  BlockContainer,
  LeftGrid,
  RightGrid,
  ContactMeBtn,
  Name,
  Title,
  StyledImage,
} from "./PresentingBlock.styled";

export default function PresentingBlock() {
  const contactBtnClickHandler = () => {
    const targetDiv = document.getElementById("Contact");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BlockContainer container spacing={2} id="Home">
      <LeftGrid item md={6} xs={12}>
        <div>
          <Name>
            I&apos;M <span>Abd El&#x2D;aziz Noaman</span>
          </Name>
          <Title>Web Developer</Title>
          <ContactMeBtn
            variant="outlined"
            size="large"
            onClick={contactBtnClickHandler}
          >
            Contact Me
          </ContactMeBtn>
        </div>
      </LeftGrid>
      <RightGrid item md={6} xs={12}>
        <StyledImage
          alt="Abd El-aziz's Image"
          src={MyPic}
          // height={650}
          // width={650}
          // style={{ marginTop: "-40px" }}
        />
        {/* <div></div> */}
      </RightGrid>
    </BlockContainer>
  );
}
