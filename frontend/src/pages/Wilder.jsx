import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteConfirmation from "../components/DeleteConfirmation";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function Wilder() {
  // on récupère l'id dans l'url
  const { id } = useParams();
  const navigate = useNavigate();
  const [wilder, setWilder] = useState([]);

  const getWilderById = () => {
    axios
      .get(`${apiBaseUrl}/api/wilders/${id}`)
      .then((result) => {
        setWilder(result.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast("This wilder doesn't exist", { type: "error" });
          navigate("/wilders", { replace: true });
        }
      });
  };

  useEffect(() => {
    getWilderById();
  }, []);

  return (
    <Container className="text-center">
      <h2>
        {wilder.firstname} {wilder.lastname}
      </h2>
      <h3>{wilder.city}</h3>
      <h4>{wilder.email}</h4>
      <Link
        to={`/wilders/${wilder.id}/edit`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button variant="primary">Edit</Button>
      </Link>
      <DeleteConfirmation firstname={wilder.firstname} />
    </Container>
  );
}

export default Wilder;
