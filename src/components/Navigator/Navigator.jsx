import React, { useState, useContext } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Image from "next/image";
import Logo from "public/images/code-logo.webp";
import ThemeContext from "../../store/themeContext";
import {
  ModeIconContainer,
  StyledAppBar,
  StyledButton,
  NavButtonsContainer,
  LogoWrap,
} from "./Navigator.styled";

const pages = ["Home", "About", "Experience", "Contact"];

export default function Navigator() {
  const { toggleMode } = useContext(ThemeContext);
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (blockId) => {
    setAnchorElNav(null);
    const targetDiv = document.getElementById(blockId);
    targetDiv?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledAppBar position="fixed" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoWrap>
            <Image
              alt="logo"
              src={Logo}
              width={72}
              height={52}
              style={{ display: "block" }}
              priority
            />
          </LogoWrap>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: { xs: -3 } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NavButtonsContainer
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, display: "block" }}
                theme={theme}
              >
                {page}
              </StyledButton>
            ))}
          </NavButtonsContainer>

          <ModeIconContainer
            sx={{ flexGrow: 0 }}
            onClick={toggleMode}
            theme={theme}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <NightlightIcon />
            )}
          </ModeIconContainer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
