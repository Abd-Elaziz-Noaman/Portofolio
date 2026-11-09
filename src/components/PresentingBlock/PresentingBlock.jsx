import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import MyPic from "public/images/my-pic.webp";

import {
  BlockContainer,
  HeroInner,
  HeroCopy,
  HeroMedia,
  ContactMeBtn,
  DownloadCvBtn,
  HeroActions,
  Name,
  Title,
  StyledImage,
} from "./PresentingBlock.styled";

export default function PresentingBlock() {
  const nameRef = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(nameRef.current, {
      strings: [
        `I&apos;M <span>Abd El&#x2D;Aziz Noaman</span>`,
        `<span>Software Engineer</span>`,
      ],
      typeSpeed: 55,
      backSpeed: 25,
      backDelay: 1600,
      loop: true,
      showCursor: true,
    });

    return () => {
      nameTyped.destroy();
    };
  }, []);

  const contactBtnClickHandler = () => {
    const targetDiv = document.getElementById("Contact");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BlockContainer id="Home">
      <HeroInner>
        <HeroCopy>
          <Name ref={nameRef}>
            I&apos;M <span>Abd El&#x2D;Aziz Noaman</span>
          </Name>
          <Title />
          <HeroActions>
            <ContactMeBtn
              variant="outlined"
              size="large"
              onClick={contactBtnClickHandler}
            >
              Contact Me
            </ContactMeBtn>
            <DownloadCvBtn
              variant="outlined"
              size="large"
              href="/Abd_El-Aziz_Noaman_Resume.pdf"
              download
              component="a"
            >
              Download CV
            </DownloadCvBtn>
          </HeroActions>
        </HeroCopy>
        <HeroMedia>
          <StyledImage
            alt="Abd El-Aziz Noaman"
            src={MyPic}
            width={750}
            height={750}
            priority
          />
        </HeroMedia>
      </HeroInner>
    </BlockContainer>
  );
}
