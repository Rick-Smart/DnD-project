import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

function CharacterFrom() {
  const charNameRef = useRef();

  return (
    <Form>
      <Form.Group controlId="CharacterName">
        <Form.Label>Character Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter Character Name"
          ref="charNameRef"
        />
      </Form.Group>
   
    </Form>
  );
}

export default CharacterFrom;
