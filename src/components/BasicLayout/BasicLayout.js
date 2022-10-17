import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";
import "./BasicLayout.css";
function BasicLayout({ children }) {
  return (
    <div className="layout">
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </div>
  );
}

export default BasicLayout;
