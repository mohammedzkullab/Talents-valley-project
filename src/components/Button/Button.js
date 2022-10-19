import "./Button.css";
function Button({ children, type, loading }) {
  return (
    <button type={type} className="btn">
      {loading ? "loading ..." : children}
    </button>
  );
}

export default Button;
