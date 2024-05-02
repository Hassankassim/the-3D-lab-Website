function Button(props) {
  const handleClick = () => {
    // Redirect to a specific route
    window.location.href = props.url;
  };

  return (
    <button onClick={handleClick} className="unique-btn" type="button">
      <strong className="unique-strong">{props.button}</strong>
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
