import React from "react";
import { StyledMainLayout } from "./style";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <StyledMainLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledMainLayout>
  );
};

export default MainLayout;
