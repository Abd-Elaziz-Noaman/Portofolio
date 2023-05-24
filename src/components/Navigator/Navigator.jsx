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
import Logo from "../../images/code-logo.png";
import ThemeContext from "../../store/themeContext";
import {
  ModeIconContainer,
  StyledAppBar,
  StyledMenuItem,
  StyledButton,
  NavButtonsContainer,
} from "./Navigator.styled";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navigator() {
  const { mode, toggleMode } = useContext(ThemeContext);
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <StyledAppBar position="sticky" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            alt="logo"
            src={Logo}
            width={90}
            height={60}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <StyledMenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  // sx={{ color: "black" }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <NavButtonsContainer
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={handleCloseNavMenu}
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
