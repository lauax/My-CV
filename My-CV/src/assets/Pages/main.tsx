import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/montserrat/400.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import PastExperiences from "./PastExperiences";
import Portfolio from "./Portfolio";




const theme = extendTheme({
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/past-experiences" element={<PastExperiences />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
