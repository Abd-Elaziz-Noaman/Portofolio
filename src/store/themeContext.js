import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";

// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

const ThemeContext = React.createContext({
  mode: "",
  toggleMode: () => {},
  theme: null,
});

// export const darkTheme = createTheme({
//   palette: {
//     mode: prefersDarkMode ? "dark" : "light",
//   },
// });

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

export const ThemeContextProvider = (props) => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // console.log(
  //   "🚀 ~ file: themeContext.js:53 ~ ThemeContextProvider ~ prefersDarkMode:",
  //   prefersDarkMode
  // );

  if (typeof window !== "undefined") {
    const intialMode = localStorage.getItem("mode") || "dark";
  }

  const [mode, setMode] = useState(intialMode);

  const toggleModeHandler = () => {
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      setMode("light");
    } else {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    }
  };

  console.log({ mode });

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: { main: "#000", dark: "#34353A", light: "#F9F6EE" },
      secondary: { main: "#000", dark: "#3d3e42", light: "#f3f3f2" },
    },
  });

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       // vars: {
  //       //   primary: "#EF14E2",
  //       //   theme: "#96248E",
  //       //   secondary: "#96248e",
  //       // },
  //       palette: {
  //         mode,
  //         ...(mode === "light"
  //           ? {
  //               // palette values for light mode
  //               primary: { main: "#fff" },
  //               divider: "#fff"[200],
  //               text: {
  //                 primary: "#34353A"[900],
  //                 secondary: "#34353A"[800],
  //               },
  //             }
  //           : {
  //               // palette values for dark mode
  //               primary: { main: "#34353A" },
  //               // divider: "#34353A"[700],
  //               background: {
  //                 default: "#34353A"[900],
  //                 paper: "#34353A"[900],
  //               },
  //               text: {
  //                 primary: "#fff",
  //                 secondary: "grey"[500],
  //               },
  //             }),
  //       },
  //       boxShadow: {
  //         shadows:
  //           mode === "dark"
  //             ? "0px -2px 4px rgb(0 0 0 / 25%)"
  //             : "0px 4px 4px rgb(70 161 27 / 25%)",
  //       },
  //     }),
  //   [mode]
  // );

  const contextValue = {
    mode: mode,
    toggleMode: toggleModeHandler,
    theme: theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={contextValue.theme}>
        <CssBaseline />
        <ThemeProvider theme={contextValue.theme}>
          {props.children}
        </ThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// export const theme = createTheme(getDesignTokens("dark"));

export default ThemeContext;
