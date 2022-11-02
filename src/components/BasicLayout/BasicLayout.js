import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";
import { Layout } from "./style";

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
