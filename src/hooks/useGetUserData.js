import { useContext, useCallback } from "react";
import { AuthContext } from "../store/AuthContext";
import useFetch from "./useFetch";
import { API_URL } from "../Constants";
const useGetUserData = () => {
  const auth = useContext(AuthContext);
  const url = `${API_URL}settings/profile`;
  const options = {
    method: "get",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = useCallback(
    (data) => {
      auth.setUserData(data.data);
    },
    [auth]
  );
  const {
    loading,
    errors: userError,
    fetchData: userFetchData,
  } = useFetch(url, options, dataSync);
  return { userError, userFetchData, loading };
};
export default useGetUserData;
