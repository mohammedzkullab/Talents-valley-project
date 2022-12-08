import React from "react";
import { Outlet } from "react-router";
import { StyledOutlet } from "../dashboard/Style";
import DashboardLayout from "../dashboardLayout/DashboardLayout";
import SideMenu from "../sideMenu/SideMenu";

const TeamCreateInvoice = () => {
  return (
    <DashboardLayout>
      <SideMenu
        heading="create"
        items={[
          {
            title: "Invoice Records",
            path: "/teamdashboard/createInvoice",
            end: true,
          },
          { title: "Payout Records", path: "payout-records" },
          { title: "Add Link", path: "add-link" },
        ]}
      />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </DashboardLayout>
  );
};

export default TeamCreateInvoice;
