import { useContext, useCallback } from "react";
import { AuthContext } from "../store/AuthContext";
import useFetch from "./useFetch";
const useGetUserData = () => {
  const auth = useContext(AuthContext);
  const url = "https://talents-valley.herokuapp.com/api/settings/profile";
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
