import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import LandingPage from "./pages/LandingPage/landing-page";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  </React.StrictMode>
);
