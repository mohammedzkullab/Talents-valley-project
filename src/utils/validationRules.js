const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;

export const LOGIN_VALIDATION = {
  validations: {
    email: {
      required: { value: true, message: "please enter an email" },
      pattern: {
        value: EMAIL_PATTERN,
        message: "Invalid Email Format",
      },
    },
    password: {
      required: { value: true, message: "please enter password" },
      pattern: {
        value: PASSWORD_PATTERN,
        message: "Invalid password",
      },
    },
  },
};

export const FORGET_VALIDATION = {
  validations: {
    email: {
      required: { value: true, message: "please enter an email" },
    },
  },
};

export const RESETPASS_VALIDATION = {
  validations: {
    password: {
      required: { value: true, message: "please enter password" },
      pattern: {
        value: PASSWORD_PATTERN,
        message: "Weak Password ",
      },
    },
    coPassword: {
      required: { value: true, message: "please enter co-password" },
      isSame: {
        value: ["password", "coPassword"],
        message: "password and its confirm doesn't match",
      },
    },
  },
};
