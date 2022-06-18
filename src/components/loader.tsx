import React from 'react';
import '../index.css';
import LoaderIcon from '../assets/icons/loader_icon.png';

const Loader: React.FC = () => {
  return (
    <div className="loader d-flex-col-just-center-align-center">
      <img src={LoaderIcon} className="loader_icon" alt="Loader" />
      <h3 className="loader_text">Submitting Data...</h3>
    </div>
  );
};

export default Loader;
