import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../appReducers";
import { CLOSE_MODAL } from "../redux/modal-actions";

const MyModal = () => {
  const state = useSelector((state: AppState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () =>
    dispatch({
      type: CLOSE_MODAL
    });

  return (
    <Modal
      show={state.open}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {state.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{state.body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
