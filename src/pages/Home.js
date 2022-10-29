import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import useNewValidation from "../hooks/useNewValidation";

import { AuthContext } from "../store/AuthContext";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [errors, setErros] = useState("");
  // const [isTouched, setisTouched] = useState(false);
  // const dispatchValidate = useNewValidation();
  const auth = useContext(AuthContext);
  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div>
      Home
      <p>
        {errors[0]}
        {errors[1]}
      </p>
      <Link to="/">login</Link>
      <Link to="signup">signup</Link>
      <button onClick={logoutHandler}>logout</button>
      <p>hello {auth.userData.firstName}</p>
      <Input
        label="Email"
        type="text"
        required={false}
        placeholder="email@gmail.com"
        stateHandler={setEmail}
        // blur={setisTouched}
        errorState={errors && errors[0]}
        // backendError={error && error}
      />
      <Input
        label="Password"
        type="password"
        required={false}
        placeholder=""
        stateHandler={setPass}
        // blur={setisTouched}
        errorState={errors && errors[1]}

        // backendError={error && error}
      />
    </div>
  );
}

export default Home;
