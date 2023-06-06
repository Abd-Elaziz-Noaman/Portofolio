import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Image from "next/image";
import Logo from "../../images/code-logo.webp";
import ThemeContext from "../../store/themeContext";
import {
  ModeIconContainer,
  StyledAppBar,
  StyledMenuItem,
  StyledButton,
  NavButtonsContainer,
} from "./Navigator.styled";

const pages = ["Home", "About", "Projects", "Experience", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navigator() {
  const { mode, toggleMode } = useContext(ThemeContext);
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = (blockId) => {
    setAnchorElNav(null);
    const targetDiv = document.getElementById(blockId);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <StyledAppBar position="fixed" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            alt="logo"
            src={Logo}
            width={90}
            height={60}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
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
              // onClose={handleCloseNavMenu}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  // sx={{ color: "black" }}
                >
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
