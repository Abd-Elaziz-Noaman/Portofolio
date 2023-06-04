import React from "react";
import { Grid } from "@mui/material";
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
  ContentContainer,
  ContactBlock,
  ContaxtText,
} from "./Contact.styled";

export default function Contact() {
  return (
    <ContactContainer id="Contact">
      <Title>Contact Me</Title>
      <ContentContainer container spacing={2} justifyContent="center">
        <Grid item lg={6} md={6} sm={8} xs={12}>
          <ContactBlock href="mailto:zizo.noaman@yahoo.com">
            <EmailIcon fontSize="large" />
            <ContaxtText>zezo.noaman@yahoo.com</ContaxtText>
          </ContactBlock>
        </Grid>
        <Grid item lg={6} md={6} sm={8} xs={12}>
          <ContactBlock href="tel:+201006831361">
            <PhoneIcon fontSize="large" />
            <ContaxtText>(+20) 01006831361</ContaxtText>
          </ContactBlock>
        </Grid>
        <Grid item lg={6} md={6} sm={8} xs={12}>
          <ContactBlock
            href="https://www.google.com/maps/search/?api=1&query=Egypt"
            target="_blank"
          >
            <RoomIcon fontSize="large" />
            <ContaxtText>Cairo, Egypt</ContaxtText>
          </ContactBlock>
        </Grid>
      </ContentContainer>
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
