import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { ThemeProvider } from "styled-components";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

