import styled from "styled-components";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";

const Layout = styled.div`
  background: var(--secondary-color);
  padding-top: 96px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-height: 1080px) {
    padding-top: 50px;
  }
`;
function BasicLayout({ children, head, backBtn }) {
  return (
    <Layout>
      <ContentWrapper head={head} backBtn={backBtn}>
        {children}
      </ContentWrapper>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
