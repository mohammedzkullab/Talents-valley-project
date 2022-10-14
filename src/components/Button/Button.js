import "./Button.css";
function Button({ children, type }) {
  return (
    <button type={type} className="btn">
      {children}
    </button>
  );
}

export default Button;
