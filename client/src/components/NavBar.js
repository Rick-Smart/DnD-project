import React from "react";
import { Nav } from "react-bootstrap";
import { useAuth } from "../utils/AuthContext";

function NavBar() {
  const { logout } = useAuth();

  async function handleSignOut(e) {
    e.preventDefault();
    try {
      await logout();
    }catch (err){
        console.log(err)
    }
  }

  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#" onClick={handleSignOut}>
          Sign Out
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
