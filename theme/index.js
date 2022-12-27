import { createTheme, ThemeProvider } from "@mui/material";

export default function ThemeConfig({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Rubik, sans-serif",
    },
    palette: {},
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
