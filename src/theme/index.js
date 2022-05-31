import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    text: {
      main: "#30d",
    },
  },
  typography: {
    fontFamily: "Roboto",
    brandFont: {
      fontSize: 35,
    },
  },
  spacing: 4,
});

export const ThemeComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
