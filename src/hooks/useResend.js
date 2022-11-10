import { useState } from "react";
const useResend = (url = "", body = {}, successMessage = "", token) => {
  const [done, setDone] = useState();
  const [message, setMessage] = useState();
  const resend = () => {
    const options = {
      method: "post",
      body: body && JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
    };

    fetch(url, options)
      .then((res) => {
        if (res.ok) {
          setDone(true);
          setMessage(successMessage);
        } else {
          setDone(false);
          setMessage("Error while resending code , try again");
        }
      })

      .catch(() => {
        setDone(false);
        setMessage("Error while resending code , try again");
      });
  };
  return { done: done, message: message, resend: resend };
};
export default useResend;
