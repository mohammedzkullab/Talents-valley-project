const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
const PHONENUMBER_PATTERN = /^(\+)/;
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

export const SIGNUP_VALIDATION = {
  validations: {
    firstName: {
      required: { value: true, message: "please enter firstName" },
    },
    lastName: {
      required: { value: true, message: "please enter lastName" },
    },
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
    phoneNumber: {
      required: { value: true, message: "please enter phone number" },
      pattern: {
        value: PHONENUMBER_PATTERN,
        message: "Invalid phone number",
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
