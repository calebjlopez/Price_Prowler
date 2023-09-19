import React from 'react';
import './Loading.css'; // Import the CSS for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Finding results! This can take a minute.</p>
    </div>
  );
};

export default Loading;