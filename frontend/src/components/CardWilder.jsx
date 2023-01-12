/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";

function CardWilder({ firstname, lastname, city, email }) {
  return (
    <Card style={{ width: "16rem" }} className="text-center">
      <Card.Body>
        <Card.Title>{`${firstname} ${lastname}`}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{city}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardWilder;
