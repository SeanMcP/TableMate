import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import ContentContainer from "../components/layout/ContentContainer";

const SWindowDiv = styled.div`
  background: url(${require("../images/reception.jpg")}) center;
  background-position: fixed;
  background-size: cover;
  height: 20rem;
  width: 100%;
`;

function HomeView(props) {
  return (
    <>
      <SWindowDiv />
      <ContentContainer>
        <h1>TableMate</h1>
        <p>
          Easily and quickly manage guests and build a seating chart for your
          next event.
        </p>
        <Link to="/guests">Get started with the guest list</Link> or <Link to="/seating">start building your seating chart</Link>!
      </ContentContainer>
    </>
  );
}

export default HomeView;
