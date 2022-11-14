import styled from "styled-components/macro";

export const SignUpWrapper = styled.div`
  margin-top: 32px;
  .signup_name {
    display: flex;
    justify-content: space-between;
    gap: 32px;
  }
  button[type="submit"] {
    margin-top: 20px;
  }
  .react-tel-input .form-control {
    font-size: var(--font-size);
    border: none;
    width: 100%;
    color: var(--gray);
  }
  .react-tel-input .flag-dropdown.open,
  .react-tel-input .flag-dropdown,
  .react-tel-input .selected-flag:hover,
  .react-tel-input .selected-flag:focus {
    background: none;
  }
  .react-tel-input .flag-dropdown {
    border: none;
    border-right: 1px solid var(--light-gray);
  }
  .react-tel-input .selected-flag {
    padding: 0;
  }
  .react-tel-input {
    padding: 9px;
  }
  .logo_Wrapper {
    margin-bottom: 30px;
  }
  .react-tel-input .selected-flag .arrow {
    left: 22px;
  }
  .react-tel-input .selected-flag .flag {
    scale: 1.3;
  }
`;
