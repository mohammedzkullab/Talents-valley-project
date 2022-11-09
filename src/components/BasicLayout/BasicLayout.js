import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";
import Logo from "../Logos/Logo";
import { Layout } from "./style";

function BasicLayout({ children, backBtn }) {
  return (
    <Layout>
      <ContentWrapper head={<Logo />} backBtn={backBtn}>
        {children}
      </ContentWrapper>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
