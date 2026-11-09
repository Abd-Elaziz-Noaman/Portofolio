import React, { useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = React.createContext({
  mode: "",
  toggleMode: () => {},
  theme: null,
});

function readStoredMode() {
  try {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("mode") || "dark";
    }
  } catch {
    // localStorage unavailable
  }
  return "dark";
}

function writeStoredMode(nextMode) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mode", nextMode);
    }
  } catch {
    // localStorage unavailable
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(readStoredMode);

  const toggleMode = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    writeStoredMode(nextMode);
    setMode(nextMode);
  };

  const isLight = mode === "light";

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: isLight ? "#F4F4F5" : "#34353A",
        paper: isLight ? "#FFFFFF" : "#3d3e42",
      },
      primary: {
        main: isLight ? "#1C1917" : "#ffc86b",
        dark: isLight ? "#1C1917" : "#34353A",
        light: isLight ? "#F4F4F5" : "#F5F5F4",
      },
      secondary: {
        main: isLight ? "#44403C" : "#ffc86b",
        dark: isLight ? "#E7E5E4" : "#3d3e42",
        light: isLight ? "#FFFFFF" : "#f3f3f2",
      },
      text: {
        primary: isLight ? "#1C1917" : "#F5F5F4",
        secondary: isLight ? "#57534E" : "#D6D3D1",
      },
      accent: {
        main: "#ffc86b",
        text: isLight ? "#8B5A00" : "#ffc86b",
        soft: isLight ? "rgba(139, 90, 0, 0.12)" : "rgba(255, 200, 107, 0.16)",
        border: isLight ? "rgba(139, 90, 0, 0.28)" : "rgba(255, 200, 107, 0.3)",
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
