import "../../GeneralStyle.css";
function ContentWrapper({ children, head, backBtn }) {
  return (
    <div className="content_wrapper">
      {backBtn && (
        <div className="head">
          {backBtn}
          {head}
        </div>
      )}
      {!backBtn && head}
      {children}
    </div>
  );
}

export default ContentWrapper;
