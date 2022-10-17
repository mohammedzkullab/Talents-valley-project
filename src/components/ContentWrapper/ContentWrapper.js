import Logo from "../Logo";
import "../../GeneralStyle.css";
function ContentWrapper({ children }) {
  return (
    <div className="content_wrapper">
      <Logo />
      {children}
    </div>
  );
}

export default ContentWrapper;
