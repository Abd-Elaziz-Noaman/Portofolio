"use client";

import React, { useEffect, useState } from "react";

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

const phrases = [
  { prefix: "I'm ", accent: "Abd El-Aziz Noaman" },
  { prefix: "", accent: "Software Engineer" },
];

function useTypewriter(items, { typeSpeed = 55, backSpeed = 25, backDelay = 1600 } = {}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrase = items[phraseIndex];
  const fullText = `${phrase.prefix}${phrase.accent}`;

  useEffect(() => {
    let timeoutId;

    if (!deleting && charCount === fullText.length) {
      timeoutId = setTimeout(() => setDeleting(true), backDelay);
    } else if (deleting && charCount === 0) {
      timeoutId = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % items.length);
      }, 250);
    } else {
      timeoutId = setTimeout(
        () => setCharCount((count) => count + (deleting ? -1 : 1)),
        deleting ? backSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeoutId);
  }, [
    backDelay,
    backSpeed,
    charCount,
    deleting,
    fullText.length,
    items.length,
    typeSpeed,
  ]);

  const visible = fullText.slice(0, charCount);
  const accentStart = phrase.prefix.length;

  return {
    prefix: visible.slice(0, Math.min(visible.length, accentStart)),
    accent: visible.slice(accentStart),
  };
}

export default function PresentingBlock() {
  const typed = useTypewriter(phrases);

  const contactBtnClickHandler = () => {
    const targetDiv = document.getElementById("Contact");
    targetDiv?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BlockContainer id="Home">
      <HeroInner>
        <HeroCopy>
          <Name>
            {typed.prefix}
            <span className="accent">{typed.accent}</span>
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
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
