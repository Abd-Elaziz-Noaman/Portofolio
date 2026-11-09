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

  let intialMode = "dark";
  try {
    if (typeof window !== "undefined") {
      intialMode = window.localStorage.getItem("mode") || "dark";
      console.log("All Works fine!");
    }
  } catch (err) {
    console.log("localStorage is not available.");
  }

  console.log(
    "🚀 ~ file: themeContext.js:59 ~ ThemeContextProvider ~ intialMode:",
    intialMode
  );

  const [mode, setMode] = useState(intialMode);

  const toggleModeHandler = () => {
    if (mode === "dark") {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem("mode", "light");
        }
      } catch (err) {
        console.log("localStorage is not available.");
      }
      setMode("light");
    } else {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem("mode", "dark");
        }
      } catch (err) {
        console.log("localStorage is notavailable.");
      }
      setMode("dark");
    }
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
