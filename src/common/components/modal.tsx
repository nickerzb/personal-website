import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../appReducers';
import { CLOSE_MODAL } from '../redux/modal-actions';

const MyModal = () => {
  const state = useSelector((state: AppState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () =>
    dispatch({
      type: CLOSE_MODAL,
    });

  if (!state.body) {
    return null;
  }

  return (
    <Modal show={state.open} onHide={closeModal} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{state.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{state.body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
