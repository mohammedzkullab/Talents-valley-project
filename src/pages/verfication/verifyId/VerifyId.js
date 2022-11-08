import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import MainLayout from "../../../components/MainLayout/MainLayout";
import { SuperHeading, SubHeading } from "../../../designsystem/typography";
import { AuthContext } from "../../../store/AuthContext";
import Button from "../../../components/Button/Button";
import IdIcon from "../../../assets/images/idCard.png";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import DropDown from "../../../components/DropDown/DropDown";
import Input from "../../../components/Input/Input";
import { ReactComponent as ErrorBadge } from "../../../assets/icons/errorBadge.svg";
import UploadFile from "../../../components/uploadFile/UploadFile";
import { HeaderWrapper } from "../HeaderWrapper";

const VerifyId = () => {
  const [idNumber, setIdNumber] = useState();
  const [idType, setIdType] = useState();
  const [idFile, setIdFile] = useState();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const url = "https://talents-valley.herokuapp.com/api/user/verify/id";
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

  const submitHandler = (event) => {
    event.preventDefault();
    data.append("file", idFile);
    data.append("idNumber", idNumber);
    data.append("idDocumentType", idType);
    fetchData();
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
            stateHandler={(e) => setIdNumber(e.target.value)}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            backendError={error && error}
          />
          <UploadFile
            onFileSuccess={setIdFile}
            acceptedTypes={["jpg", "png"]}
            hintMessage="Your document shouldn't be three months old"
          />

          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Continue"}
          </Button>
        </form>

        {error && !error.key && (
          <span className="error_badge">
            <ErrorBadge />
            {error.message}
          </span>
        )}
      </ContentWrapper>
    </MainLayout>
  );
};

export default VerifyId;
