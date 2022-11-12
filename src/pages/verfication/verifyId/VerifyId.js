import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import MainLayout from "../../../components/MainLayout/MainLayout";
import { SuperHeading, SubHeading } from "../../../designsystem/typography";
import { AuthContext } from "../../../store/AuthContext";
import Button from "../../../components/Button/Button";
import IdIcon from "../../../assets/images/idCard.png";
import useFetch from "../../../hooks/useFetch";
import useValidate from "../../../hooks/useNewValidation";
import Loader from "../../../components/Loader/Loader";
import DropDown from "../../../components/DropDown/DropDown";
import Input from "../../../components/Input/Input";
import UploadFile from "../../../components/uploadFile/UploadFile";
import { HeaderWrapper } from "../HeaderWrapper";
import { API_URL } from "../../../Constants";
import ErrorStatment from "../../../components/error/ErrorStatment";
import { VERIFY_ID_VALIDATION } from "../../../utils/validationRules";

const VerifyId = () => {
  const [idType, setIdType] = useState("");
  const [idFile, setIdFile] = useState();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `${API_URL}user/verify/id`;
  const data = new FormData();
  const options = {
    method: "post",
    body: data,
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = useCallback(() => {
    navigate("/verfication");
  }, [navigate]);
  const { loading, error, fetchData } = useFetch(url, options, dataSync);

  const verifyIdData = {
    idNumber: "",
  };
  const {
    values,
    changeHandler,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(verifyIdData, VERIFY_ID_VALIDATION);
  const submitHandler = (event) => {
    event.preventDefault();
    data.append("file", idFile);
    data.append("idNumber", values.idNumber);
    data.append("idDocumentType", idType);
    submitValidator(event, fetchData);
  };

  return (
    <MainLayout>
      <ContentWrapper verfication>
        <HeaderWrapper>
          <SuperHeading alignCenter margin32>
            ID Verification
          </SuperHeading>
          <div className="imageWrapper">
            <img src={IdIcon} alt="email icon" />
          </div>
          <SubHeading margin32>
            Upload Document that Proof your Identity such as: Identity Card,
            Passport, Driver License
          </SubHeading>
        </HeaderWrapper>
        <form onSubmit={submitHandler}>
          <DropDown
            items={[
              { id: "national_id", label: "Identity Card" },
              { id: "passport", label: "Passport" },
              { id: "driving_license", label: "Driver License" },
            ]}
            initItem="national_id"
            label="Document Type"
            stateHandler={setIdType}
          />

          <Input
            label="ID Number"
            type="number"
            name="idNumber"
            placeholder="Enter your ID number"
            stateHandler={changeHandler}
            blur={blurHandler}
            errorState={touched.idNumber && errors.idNumber && errors.idNumber}
            backendError={error && error}
          />
          <UploadFile
            onFileSuccess={setIdFile}
            acceptedTypes={["jpg", "png"]}
            hintMessage="Your document shouldn't be three months old"
            // errorState={touched.idFile && errors.idFile && errors.idFile}
          />

          <Button type="submit" disabled={false}>
            {loading ? <Loader /> : "Continue"}
          </Button>
        </form>

        {error && !error.key && <ErrorStatment>{error.message}</ErrorStatment>}
      </ContentWrapper>
    </MainLayout>
  );
};

export default VerifyId;
