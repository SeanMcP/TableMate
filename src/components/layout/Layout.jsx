import React from "react";
import { Link } from "@reach/router";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to="/">TableMate</Link>
        <nav>
          <Link to="/guests">Guests</Link>
          <Link to="/seating">Seating</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
