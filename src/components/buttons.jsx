import React from 'react';
 // Make sure to have Button.css in the same directory

function Button() {
  const handleClick = () => {
    // Redirect to a specific route
    window.location.href = '/login';
  };

  return (
    <button onClick={handleClick} className="unique-btn" type="button">
      <strong className="unique-strong">LET MAKE A DEAL</strong>
      <div className="unique-container-stars">
        <div className="unique-stars" id="stars"></div>
      </div>

      <div className="unique-glow">
        <div className="unique-circle"></div>
        <div className="unique-circle"></div>
      </div>
    </button>
  );
}

export default Button;
