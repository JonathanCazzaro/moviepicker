import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#EEF0F2",
    },
    primary: teal,
    secondary: {
      main: "#EEF0F2",
      contrastText: "#B63753",
      dark: "#fff",
    },
    text: {
      primary: "#141414",
      secondary: "#EEF0F2",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100vh"
        },
        body: {
          height: "100%",
          padding: "1rem 0 1rem 0"
        }
      }
    }
  }
});
