import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useScroll, useSpring } from "framer-motion";
import Typed from "typed.js";

// import MyPic from "../../images/my-pic.webp";
import MyPic from "public/images/hacker.png";

import {
  BlockContainer,
  LeftGrid,
  RightGrid,
  ContactMeBtn,
  Name,
  Title,
  ImageAnimationContainer,
  StyledImage,
} from "./PresentingBlock.styled";

export default function PresentingBlock() {
  const nameRef = useRef(null);
  // const titleRef = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(nameRef.current, {
      strings: [
        `I&apos;M <span>Abd El&#x2D;aziz Noaman</span>`,
        `<span>Web Developer</span>`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      loop: true,
      showCursor: true,
    });

    // const titleTyped = new Typed(titleRef.current, {
    //   strings: ["Web Developer"],
    //   typeSpeed: 50,
    //   backSpeed: 0,
    //   loop: false,
    //   showCursor: false,
    //   startDelay: 1000,
    // });

    return () => {
      nameTyped.destroy();
      // titleTyped.destroy();
    };
  }, []);

  const contactBtnClickHandler = () => {
    const targetDiv = document.getElementById("Contact");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BlockContainer container spacing={2} id="Home">
      <LeftGrid item md={6} sm={12} xs={12}>
        <div>
          <Name ref={nameRef}>
            I&apos;M <span>Abd El&#x2D;aziz Noaman</span>
          </Name>
          {/* <Title>Web Developer</Title> */}
          <Title></Title>
          <ContactMeBtn
            variant="outlined"
            size="large"
            onClick={contactBtnClickHandler}
          >
            Contact Me
          </ContactMeBtn>
        </div>
      </LeftGrid>
      <RightGrid item md={6} sm={12} xs={12}>
        <ImageAnimationContainer
          initial={{ scale: 0.6 }}
          animate={{ scale: [0.6, 0.67, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <StyledImage
            alt="Abd El-aziz's Image"
            src={MyPic}
            // height={650}
            // width={650}
            // style={{ marginTop: "-40px" }}
          />
        </ImageAnimationContainer>
        {/* <div></div> */}
      </RightGrid>
    </BlockContainer>
  );
}
