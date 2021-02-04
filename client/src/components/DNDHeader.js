import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import "../styles/styles.css";
function DNDHeader() {
  return (
    <header>
      <Container className="header-container">
        <div>
          <h1>Dungeons&Dragons</h1>
          <p>Development Site</p>
        </div>
        <div className="nav-bar">
        <NavBar />
        </div>
      </Container>
    </header>
  );
}

export default DNDHeader;
