import { createTheme } from "@mui/material";
import { palette } from "./palette";

// Tema principal de EduPanel con Material Design 3
const theme = createTheme({
  palette,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600 },
    body2: { color: "#5A5F7A" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600, borderRadius: 12 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 12px rgba(92,107,192,0.08)",
          border: "1px solid rgba(92,107,192,0.08)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          boxShadow: "2px 0 20px rgba(92,107,192,0.08)",
        },
      },
    },
  },
});

export default theme;
