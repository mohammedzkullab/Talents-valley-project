import { useState } from "react";

const validate = (options, data) => {
  const validations = options?.validations;
  if (validations) {
    let valid = true;
    const newErrors = {};
    for (const key in validations) {
      const value = data[key];
      const validation = validations[key];

      const pattern = validation?.pattern;
      if (pattern?.value && !pattern.value.test(value)) {
        valid = false;
        newErrors[key] = pattern.message;
      }
      const isSame = validation?.isSame;
      if (isSame?.value && !(data[isSame.value[0]] === data[isSame.value[1]])) {
        valid = false;
        console.log("");
        newErrors[key] = isSame.message;
      }
      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }
      if (validation?.required?.value && !value) {
        valid = false;
        newErrors[key] = validation?.required?.message;
      }
    }

    return {
      isValid: valid,
      errors: newErrors,
    };
  }
};

const useValidate = (initialState = {}, validations = {}) => {
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.value };
    const { isValid, errors } = validate(validations, newValues);
    setTouched({
      ...touched,
      [event.target.name]: false,
    });
    setValid(isValid);
    setErrors(errors);
    setValues(newValues);
  };

  const blurHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  return { values, changeHandler, isValid, errors, touched, blurHandler };
};
export default useValidate;
