import React from "react";
import TableAction from "../../../components/tableAction/TableAction";
import TableLayout from "../tableLayout/TableLayout";
// import { StyledTableBody } from "./style";
const Users = () => {
  const headers = [" ", "Name", "Email", "Balance", " ", "status", " "];
  const TableBody = ({ item, setEditedUserId, deleteUserFunc }) => {
    return (
      <>
        <td>
          <span>{item.firstName[0].toUpperCase()}</span>
        </td>
        <td>
          {item.firstName} {item.lastName}
        </td>
        <td>{item.email}</td>
        <td>${item.balance}</td>
        <td>{item.role === 1 && <span>team</span>}</td>
        <td>
          {item.verifiedEmail &&
          item.verifiedMobile &&
          item.verifiedAddress.status === "approved" &&
          item.verifiedId.status === "approved" ? (
            <span style={{ color: "#128807" }}>verified</span>
          ) : (
            <span style={{ color: "#FF0000" }}> not verified</span>
          )}
        </td>
        <td>
          <TableAction
            user={item}
            setEditedUserId={setEditedUserId}
            deleteUserFunc={deleteUserFunc}
          />
        </td>
      </>
    );
  };
  return (
    <TableLayout
      heading="Users"
      headers={headers}
      TableBody={TableBody}
      endpoint="team/user/list"
      offset={280}
      isSearch={true}
    />
  );
};

export default Users;
