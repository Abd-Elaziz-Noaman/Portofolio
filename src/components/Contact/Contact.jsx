import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {
  ContactContainer,
  Title,
  SocialIconsContainer,
  StyledLink,
} from "./Contact.styled";

export default function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <br />
      <br />
      <SocialIconsContainer>
        <StyledLink href="https://www.facebook.com/zezo.noaman">
          <FacebookIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#3b5998" } }}
          />
        </StyledLink>
        <StyledLink href="https://twitter.com/Zezo_Noaman">
          <TwitterIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#3b5998" } }}
          />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/abd-elaziz-noaman/">
          <LinkedInIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#3b5998" } }}
          />
        </StyledLink>
        <StyledLink href="https://api.whatsapp.com/send?phone=+201006831361">
          <WhatsAppIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#3b5998" } }}
          />
        </StyledLink>
      </SocialIconsContainer>
    </ContactContainer>
  );
}
