import React from "react";
import { Router } from "@reach/router";
import { GuestProvider } from "../store/GuestContext";
import { RoomProvider } from "../store/RoomContext";

import GuestView from "../views/GuestView";
import HomeView from "../views/HomeView";
import RoomsView from "../views/RoomsView";
import Layout from "./layout/Layout";

function App() {
  return (
    <GuestProvider>
      <RoomProvider>
        <Layout>
          <Router>
            <HomeView path="/" />
            <GuestView path="/guests" />
            <RoomsView path="/rooms" />
          </Router>
        </Layout>
      </RoomProvider>
    </GuestProvider>
  );
}

export default App;
