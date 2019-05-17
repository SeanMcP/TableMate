import React from "react";
import { Link } from "@reach/router";

function HomeView(props) {
  return (
    <>
      <h1>TableMate</h1>
      <p>
        Easily and quickly manage guests and build a seating chart for your next
        event.
      </p>
      <Link to="/guests">Get started with the guest list!</Link>
    </>
  );
}

export default HomeView;
