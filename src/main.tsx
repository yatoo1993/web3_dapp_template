import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary:'#B60A21',
  primary100:'#5C0015',
  card: '#2A2A2A',
  text100: '#CCCCCC',
  text200: '#808080',
  text300: '#1A1A1A',
  text400: '#0D0D0D',
  success: '#30B85D',
  warning: '#F6FD29',
  danger: "#FF1656",
  selected: '#456EFF',
  bgColor: '#151515'
}

const theme = extendTheme({colors})
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
