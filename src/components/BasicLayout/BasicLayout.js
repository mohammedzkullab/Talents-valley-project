import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";
import "./BasicLayout.css";
function BasicLayout({ children, head, backBtn }) {
  return (
    <div className="layout">
      <ContentWrapper head={head} backBtn={backBtn}>
        {children}
      </ContentWrapper>
      <Footer />
    </div>
  );
}

export default BasicLayout;
