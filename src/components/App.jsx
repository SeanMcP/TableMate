import React from "react";
import { Router } from "@reach/router";
import { StoreProvider } from "../store/StoreContext";

import GuestView from "../views/GuestView";
import HomeView from "../views/HomeView";
import SeatingView from "../views/SeatingView";
import Layout from "./layout/Layout";
import StyleProvider from '../styles/StyleProvider';

function App() {
  return (
    <StyleProvider>
      <StoreProvider>
        <Layout>
          <Router>
            <HomeView path="/" />
            <GuestView path="/guests" />
            <SeatingView path="/seating" />
          </Router>
        </Layout>
      </StoreProvider>
    </StyleProvider>
  );
}

export default App;
