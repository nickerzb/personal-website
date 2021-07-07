import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loading-spinner.scss';

const LoadingSpinner = () => (
  <div className="center-spinner">
    <Spinner animation="border" role="status" />
  </div>
);

export default LoadingSpinner;
