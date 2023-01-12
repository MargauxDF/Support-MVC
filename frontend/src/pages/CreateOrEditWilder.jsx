import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function CreateOrEditWilder() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [wilder, setWilder] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
  });

  const canBeSubmit = () => {
    return (
      !wilder.firstname || !wilder.lastname || !wilder.email || !wilder.city
    );
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${apiBaseUrl}/api/wilders/${id}`)
        .then((response) => {
          if (response.data) {
            setWilder(response.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setWilder({
        first_name: "",
        last_name: "",
        age: "",
      });
    }
  }, [id]);

  // Au changement des inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWilder({ ...wilder, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (wilder.firstname && wilder.lastname && wilder.email && wilder.city) {
      if (id) {
        // édition
        axios
          .put(`${apiBaseUrl}/api/wilders/${id}`, wilder)
          .then((response) => {
            console.warn(response);
            toast.success("Wilder updated");
            navigate("/wilders", { replace: true });
          })
          .catch((err) => console.error(err));
      } else {
        // création
        axios
          .post(`${apiBaseUrl}/api/wilders`, wilder)
          .then((response) => {
            console.warn(response);
            setWilder({
              firstname: "",
              lastname: "",
              email: "",
              city: "",
            });
            toast.success(response.data.status);
            navigate("/wilders", { replace: true });
          })
          .catch((err) => console.error(err));
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the wilder firstname"
            name="firstname"
            onChange={handleChange}
            required
            value={wilder.firstname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the wilder lastname"
            name="lastname"
            onChange={handleChange}
            required
            value={wilder.lastname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the wilder email"
            name="email"
            onChange={handleChange}
            required
            value={wilder.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the wilder city"
            name="city"
            onChange={handleChange}
            required
            value={wilder.city}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={canBeSubmit()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreateOrEditWilder;
