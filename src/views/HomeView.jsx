import React from "react";
import { Link } from "@reach/router";

function HomeView(props) {
  return (
    <div>
      <h2>Hello world</h2>
      <Link to="/guests">Manage guests</Link>
    </div>
  );
}

export default HomeView;
