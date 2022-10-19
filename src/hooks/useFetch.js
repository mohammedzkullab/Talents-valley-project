import { useState, useCallback } from "react";
const useFetch = (url = "", options = {}, dataFunc = (f) => f) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const recivedData = await response.json();
        dataFunc(recivedData);
      } else if (response.status === "400") {
        throw new Error("incorrect email or password");
      } else {
        throw new Error("incorrect email or password");
      }
    } catch (e) {
      console.error(e.message);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [dataFunc, options, url]);
  return { loading, error, fetchData };
};

export default useFetch;
