/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../store/AuthContext";
import Table from "../../../components/Table/Table";
import { Heading } from "../../../designsystem/typography";
import { StyledTableLayout, StyledTableWrapper } from "./style";
import useFetch from "../../../hooks/useFetch";
import { API_URL } from "../../../Constants";
import Loader from "../../../components/Loader/Loader";

const TableLayout = ({
  heading,
  headers,
  TableBody,
  endpoint,
  offset = 0,
  itemsPerPage = 10,
}) => {
  const auth = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = (data) => {
    console.log("we got data");
    setUserData(data);
  };
  const { loading, error, fetchData } = useFetch(
    `${API_URL}${endpoint}?offset=${offset}&limit=${itemsPerPage}`,
    options,
    dataSync
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledTableLayout>
      <Heading>{heading}</Heading>
      <StyledTableWrapper>
        {!loading ? (
          !error && (
            <Table
              headers={headers}
              tableList={userData && userData?.data?.users}
              TableBody={TableBody}
            />
          )
        ) : (
          <Loader invertColor={"invertColor"} big={"big"} />
        )}
      </StyledTableWrapper>
    </StyledTableLayout>
  );
};

export default TableLayout;
