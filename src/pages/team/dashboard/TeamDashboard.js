// import { useContext } from "react";
import { Outlet } from "react-router";
// import { AuthContext } from "../../../store/AuthContext";
import DashboardLayout from "../dashboardLayout/DashboardLayout";
import SideMenu from "../sideMenu/SideMenu";
import { StyledOutlet } from "./Style";

function TeamDashboard() {
  // const auth = useContext(AuthContext);

  return (
    <DashboardLayout>
      <SideMenu />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </DashboardLayout>
  );
}

export default TeamDashboard;
