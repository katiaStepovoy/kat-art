import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    header: {
      fontFamily: "Syne, sans-serif",
      fontSize: "2rem",
      fontWeight: "700",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    body: {
      fontFamily: "Secular One",
      fontSize: "0.9rem",
      fontWeight: "300",
    },
  },
  palette: {
    background: {
      default: "#fcd1ca",
    },
  },
});

export default theme;
