import React from "react";
import { Router } from "@reach/router";
import { GuestProvider } from "../store/GuestContext";
import { RoomProvider } from "../store/RoomContext";
import { StoreProvider } from "../store/StoreContext";

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
        <StoreProvider>
          <Layout>
            <Router>
              <HomeView path="/" />
              <GuestView path="/guests" />
              <RoomsView path="/rooms" />
              <RoomView path="/room/:name" />
              <SeatingView path="/seating" />
            </Router>
          </Layout>
        </StoreProvider>
      </RoomProvider>
    </GuestProvider>
  );
}

export default App;
