import MainLayout from "../../../components/MainLayout/MainLayout";
import { StyledDashboardLayout, StyledDashboardWrapper } from "./style";
const DashboardLayout = ({ children }) => {
  return (
    <StyledDashboardLayout>
      <MainLayout>
        <StyledDashboardWrapper>{children}</StyledDashboardWrapper>
      </MainLayout>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
