/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../store/AuthContext";
import Table from "../../../components/Table/Table";
import { Heading } from "../../../designsystem/typography";
import { StyledFeedback, StyledTableLayout, StyledTableWrapper } from "./style";
import useFetch from "../../../hooks/useFetch";
import { API_URL } from "../../../Constants";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import Search from "../../../components/Search/Search";

const TableLayout = ({
  heading,
  headers,
  TableBody,
  endpoint,
  offset = 0,
  itemsPerPage = 10,
  isSearch,
}) => {
  const auth = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [editedUserId, setEditedUserId] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [search, setSearch] = useState("");
  const [searchFilters, setSearchFilters] = useState([]);
  useEffect(() => {
    console.log(searchFilters);
  }, [searchFilters]);
  const options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = (data) => {
    setUserData(data.data.users);
    setTotalUsers(data.data.count);
  };
  const { loading, error, fetchData } = useFetch(
    `${API_URL}${endpoint}?search=${search}&limit=${itemsPerPage}&${searchFilters}`,
    options,
    dataSync
  );

  useEffect(() => {
    fetchData();
  }, [search, searchFilters]);
  useEffect(() => {
    if (editedUserId && userData) {
      const editedUser = userData.find(
        (element) => element._id === editedUserId.id
      );
      const editedIndex = userData.findIndex(
        (element) => element._id === editedUserId.id
      );
      const newArr = [...userData];
      newArr[editedIndex] = {
        ...editedUser,
        ...editedUserId.data,
      };
      setUserData(newArr);
    }
  }, [editedUserId]);
  const deleteUserFunc = (userId) => {
    const editedUsers = userData.filter((element) => element._id !== userId);
    setUserData(editedUsers);
  };
  return (
    <StyledTableLayout>
      <Heading>{heading}</Heading>
      {isSearch && (
        <Search
          search={search}
          setSearch={setSearch}
          setSearchFilters={setSearchFilters}
        />
      )}
      <StyledTableWrapper>
        {!loading ? (
          !error ? (
            <>
              {userData && totalUsers !== 0 ? (
                <Table
                  headers={headers}
                  tableList={userData && userData}
                  TableBody={TableBody}
                  setEditedUserId={setEditedUserId}
                  deleteUserFunc={deleteUserFunc}
                />
              ) : (
                <StyledFeedback>
                  <div className="table-error">
                    <Heading>No users Found</Heading>
                  </div>
                </StyledFeedback>
              )}
            </>
          ) : (
            <StyledFeedback>
              <div className="table-error">
                <Heading>{error.message}</Heading>
                <Button onClick={fetchData}>try again</Button>
              </div>
            </StyledFeedback>
          )
        ) : (
          <StyledFeedback>
            <Loader invertColor="invertColor" big="big" />
          </StyledFeedback>
        )}
      </StyledTableWrapper>
    </StyledTableLayout>
  );
};

export default TableLayout;
