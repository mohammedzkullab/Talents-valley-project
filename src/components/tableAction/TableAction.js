import { useState } from "react";
import { ReactComponent as Dots } from "../../assets/icons/vertical-dots-icon.svg";
import { StyledDots, StyledPopup } from "./style";
// import { useFetch } from "../../hooks/useFetch";
const TableAction = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const changeRoleHandler = () => {
    console.log(user._id);
  };
  const blockHandler = () => {
    console.log("first");
  };
  const deleteHandler = () => {
    console.log("first");
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
            </li>
            <li onClick={blockHandler}>Block</li>
            <li onClick={deleteHandler}>Delete</li>
          </ul>
        </StyledPopup>
      )}
    </StyledDots>
  );
};

export default TableAction;
