import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardWilder from "../components/CardWilder";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function Wilders() {
  const [wilders, setWilders] = useState([]);

  const getWilders = () => {
    axios
      .get(`${apiBaseUrl}/api/wilders`)
      .then((result) => {
        setWilders(result.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWilders();
  }, []);

  return (
    <Container>
      <Row>
        {wilders.map((wilder) => (
          <Col xs={4}>
            <Link
              to={`/wilders/${wilder.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardWilder
                key={wilder.id}
                id={wilder.id}
                firstname={wilder.firstname}
                lastname={wilder.lastname}
                city={wilder.city}
                email={wilder.email}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wilders;
