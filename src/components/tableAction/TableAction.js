import { useState, useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { ReactComponent as Dots } from "../../assets/icons/vertical-dots-icon.svg";
import { StyledDots, StyledPopup } from "./style";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../Constants";
import Loader from "../Loader/Loader";
const TableAction = ({ user, setEditedUserId, deleteUserFunc }) => {
  const auth = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  //   const [endpoint, setEndpoint] = useState("");
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = (data) => {
    setToggle((prev) => !prev);
    setEditedUserId({ id: user?._id, data: data.data });
  };
  const deleteDataSync = () => {
    setToggle((prev) => !prev);
    deleteUserFunc(user._id);
  };
  const { loading, fetchData: editRole } = useFetch(
    `${API_URL}team/user/change-role/${user?._id}`,
    options,
    dataSync
  );
  const { blockLoading, fetchData: blockFunction } = useFetch(
    `${API_URL}team/user/block/${user?._id}`,
    options,
    dataSync
  );
  const { daleteLoading, fetchData: deleteFunction } = useFetch(
    `${API_URL}team/user/delete/${user?._id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    },
    deleteDataSync
  );
  const changeRoleHandler = () => {
    editRole();
  };
  const blockHandler = () => {
    blockFunction();
  };
  const deleteHandler = () => {
    deleteFunction();
  };
  return (
    <StyledDots>
      <div onClick={() => setToggle((prev) => !prev)}>
        <Dots />
      </div>
      {toggle && (
        <StyledPopup>
          <ul>
            <li onClick={changeRoleHandler}>
              Set as {user.role === 0 ? "team" : "User"}
              {loading && <Loader invertColor="invertColor" />}
            </li>
            <li onClick={blockHandler}>
              {!user?.isBlocked ? "Block" : " Unblock"}
              {blockLoading && <Loader invertColor="invertColor" />}
            </li>
            <li onClick={deleteHandler}>
              Delete{daleteLoading && <Loader invertColor="invertColor" />}
            </li>
          </ul>
        </StyledPopup>
      )}
    </StyledDots>
  );
};

export default TableAction;
