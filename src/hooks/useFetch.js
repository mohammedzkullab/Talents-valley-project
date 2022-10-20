import { useState, useCallback } from "react";
const useFetch = (url = "", options = {}, dataFunc = (f) => f) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const recivedData = await response.json();
      if (response.ok) {
        dataFunc(recivedData);
      } else if (response.status === 400) {
        console.log("response", recivedData);
        setError(recivedData);
      } else {
        console.log("response", recivedData);
        setError(recivedData);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [dataFunc, options, url]);
  return { loading, error, fetchData };
};

export default useFetch;
