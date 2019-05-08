import React from "react";
import { Router } from "@reach/router";
import { GuestProvider } from "../store/GuestContext";

import GuestView from "../views/GuestView";
import HomeView from "../views/HomeView";
import Layout from "./layout/Layout";

function App() {
  return (
    <GuestProvider>
      <Layout>
        <Router>
          <HomeView path="/" />
          <GuestView path="/guests" />
        </Router>
      </Layout>
    </GuestProvider>
  );
}

export default App;
