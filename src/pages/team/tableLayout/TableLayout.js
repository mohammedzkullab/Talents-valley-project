/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect, useMemo } from "react";
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
  striped = false,
}) => {
  const auth = useContext(AuthContext);
  const [fetchedData, setData] = useState([]);
  const data = useMemo(() => fetchedData, [fetchedData]);
  const [editedUserId, setEditedUserId] = useState();
  const [totalItems, setTotalItems] = useState();
  const [search, setSearch] = useState("");
  const [flatFilters, setFlatFilters] = useState("");
  const [searchFilters, setSearchFilters] = useState([]);
  const fetchUrl = `${API_URL}${endpoint}?search=${search}&limit=${itemsPerPage}${flatFilters}`;
  useEffect(() => {
    const checkedFilters = searchFilters.filter((item) => item.val === true);
    let params = "";
    checkedFilters.forEach((item) => {
      if (item.key === "all") {
        params = "";
        return;
      }
      if (item.key === "sort") {
        params = `${params}&${item.key}=-createdAt`;
        return;
      }
      params = `${params}&${item.key}=${item.val}`;
    });
    setFlatFilters(params);
  }, [searchFilters]);
  const options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = (data) => {
    setData(data.data?.users || data.data?.invoices);
    setTotalItems(data.data.count);
  };
  const { loading, error, fetchData } = useFetch(fetchUrl, options, dataSync);

  useEffect(() => {
    fetchData();
  }, [flatFilters, search]);
  useEffect(() => {
    if (editedUserId && data) {
      const editedUser = data.find(
        (element) => element._id === editedUserId.id
      );
      const editedIndex = data.findIndex(
        (element) => element._id === editedUserId.id
      );
      const newArr = [...data];
      newArr[editedIndex] = {
        ...editedUser,
        ...editedUserId.data,
      };
      setData(newArr);
    }
  }, [editedUserId]);
  const deleteUserFunc = (userId) => {
    const editedUsers = data.filter((element) => element._id !== userId);
    setData(editedUsers);
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
              {data && totalItems !== 0 ? (
                <Table
                  className={striped ? "striped" : "withBorders"}
                  headers={headers}
                  tableList={data && data}
                  TableBody={TableBody}
                  setEditedUserId={setEditedUserId}
                  deleteUserFunc={deleteUserFunc}
                />
              ) : (
                <StyledFeedback>
                  <div className="table-error">
                    <Heading>No {heading} Found</Heading>
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
