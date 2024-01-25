import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import PastExperiences from "./Pages/PastExperiences";
import Portfolio from "./Pages/Portfolio";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#202020",
        color: "white",
        margin: 0,
      },
    },
  },
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
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
