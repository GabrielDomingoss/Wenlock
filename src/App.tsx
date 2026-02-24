import { ThemeProvider } from "@mui/material";
import { Router } from "./router";
import "./styles/global.css";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
