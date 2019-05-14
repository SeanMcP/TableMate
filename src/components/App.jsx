import React from "react";
import { Router } from "@reach/router";
import { GuestProvider } from "../store/GuestContext";
import { RoomProvider } from "../store/RoomContext";

import GuestView from "../views/GuestView";
import HomeView from "../views/HomeView";
import RoomView from "../views/RoomView";
import RoomsView from "../views/RoomsView";
import SeatingView from "../views/SeatingView";
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
            <RoomView path="/room/:name" />
            <SeatingView path="/seating" />
          </Router>
        </Layout>
      </RoomProvider>
    </GuestProvider>
  );
}

export default App;
