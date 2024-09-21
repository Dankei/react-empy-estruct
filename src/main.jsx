import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
)
