import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";

import {
  ContactContainer,
  Title,
  SocialIconsContainer,
  StyledLink,
  ContactList,
  ContactBlock,
  ContactText,
} from "./Contact.styled";

export default function Contact() {
  return (
    <ContactContainer id="Contact">
      <Title>Contact Me</Title>
      <ContactList>
        <ContactBlock href="mailto:abdelaziz.noaman19@gmail.com">
          <EmailIcon fontSize="medium" />
          <ContactText>abdelaziz.noaman19@gmail.com</ContactText>
        </ContactBlock>
        <ContactBlock href="tel:+201006831361">
          <PhoneIcon fontSize="medium" />
          <ContactText>(+20) 01006831361</ContactText>
        </ContactBlock>
        <ContactBlock
          href="https://www.google.com/maps/search/?api=1&query=Cairo%2C%20Egypt"
          target="_blank"
        >
          <RoomIcon fontSize="medium" />
          <ContactText>Cairo, Egypt</ContactText>
        </ContactBlock>
      </ContactList>
      <SocialIconsContainer>
        <StyledLink href="https://www.facebook.com/zezo.noaman" target="_blank">
          <FacebookIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#3b5998" } }}
          />
        </StyledLink>
        <StyledLink href="https://twitter.com/Zezo_Noaman" target="_blank">
          <TwitterIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#55acee" } }}
          />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/abd-elaziz-noaman/"
          target="_blank"
        >
          <LinkedInIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#007bb6" } }}
          />
        </StyledLink>
        <StyledLink href="https://wa.me/+201006831361" target="_blank">
          <WhatsAppIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#25D366" } }}
          />
        </StyledLink>
        <StyledLink href="https://github.com/Abd-Elaziz-Noaman" target="_blank">
          <GitHubIcon
            fontSize="medium"
            sx={{ "&:hover": { color: "#171515" } }}
          />
        </StyledLink>
      </SocialIconsContainer>
    </ContactContainer>
  );
}
