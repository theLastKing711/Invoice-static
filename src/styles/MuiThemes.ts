import blue from "@mui/material/colors/blue";
import { green, indigo, purple, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";
// import type {} from "@mui/x-date-pickers-pro/themeAugmentation";
// When using TypeScript 4.x and above
import type {} from "@mui/x-date-pickers/themeAugmentation";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(122, 93, 243)",
    },
    secondary: {
      main: "rgb(31,43,61)",
    },
    background: {
      paper: "rgb(20, 22, 37)",
      default: "rgb(30, 33, 59)",
    },
  },
  typography: {
    h4: {
      color: "white",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1250,
      xl: 1536,
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: "white",
          marginBottom: "1.25rem",
        }),
      },
    },
    // MuiDesktopDatePicker: {
    //   defaultProps: {
    //     disabled: {
    //       green,
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: "white",
        }),
        colorSecondary: "white",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "1000px",
          padding: "0.875rem 1.75rem",
          textTransform: "none",
        }),
      },
    },
  },
});

// const theme = createTheme({ palette: '#fefefe' });
