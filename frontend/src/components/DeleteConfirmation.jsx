/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function DeleteConfirmation({ firstname }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    axios
      .delete(`${apiBaseUrl}/api/wilders/${id}`)
      .then((response) => {
        toast.success(response.data);
        navigate("/wilders", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 404) {
          toast("Ce wilder n'existe pas", { type: "error" });
        }
      });
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to delete {firstname} ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, delete !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;
