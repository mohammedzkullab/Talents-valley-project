const useNewValidation = () => {
  const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
  const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
  const nameCheck = /^[a-z ,.'-]+$/i;
  const requiredMessage = `This field is required`;

  const validate = (value, type, messageType) => {
    console.log(value, type, messageType);
    switch (type) {
      case "name":
        if (!value) {
          return requiredMessage;
        }
        if (!nameCheck.test(value)) {
          return messageType;
        }
        break;

      case "password":
        if (!value) {
          return requiredMessage;
        }
        if (!passCheck.test(value)) {
          return messageType;
        }
        break;

      case "email":
        if (!value) {
          return `This field is required`;
        }
        if (!emailCheck.test(value)) {
          return messageType;
        }
        break;
      default:
        return "something went wrong !";
    }
  };

  const dispatchValidate = (fields = []) => {
    console.log(fields);
    const errors = fields.map((item) => {
      console.log("item", item);
      return validate(
        item.value,
        item.type,
        item.message,
        item.isTouched,
        item.setIsTouched
      );
    });
    return errors;
  };
  return dispatchValidate;
};
export default useNewValidation;
