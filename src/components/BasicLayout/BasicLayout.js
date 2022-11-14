import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Footer from "../Footer/Footer";
import Logo from "../Logos/Logo";
import { Layout } from "./style";

function BasicLayout({ children, backBtn, signUp }) {
  return (
    <Layout>
      <ContentWrapper signUp={signUp} head={<Logo />} backBtn={backBtn}>
        {children}
      </ContentWrapper>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
