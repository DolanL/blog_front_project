import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    "0px 1px 5px rgba(0, 0, 0, 0.15), 0px 2px 10px rgba(0, 0, 0, 0.1)",
  ],
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
