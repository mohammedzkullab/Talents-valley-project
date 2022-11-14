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
import UploadFile from "../../../components/uploadFile/UploadFile";
import { HeaderWrapper } from "../HeaderWrapper";
import { API_URL } from "../../../Constants";
import useValidate from "../../../hooks/useNewValidation";
import { StyledFlexWrapper } from "./style";
import { VERIFY_ADDRESS_VALIDATION } from "../../../utils/validationRules";
import ErrorStatment from "../../../components/error/ErrorStatment";

const VerifyAdress = () => {
  const [addressDocumentType, setAddressDocumentType] = useState();
  const [country, setCountry] = useState();
  const [file, setFile] = useState();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const verifyAddressData = {
    address1: "",
    address2: "",
    city: "",
  };
  const {
    values,
    changeHandler,
    errors,
    touched,
    blurHandler,
    submitHandler: submitValidator,
  } = useValidate(verifyAddressData, VERIFY_ADDRESS_VALIDATION);

  const url = `${API_URL}user/verify/address`;
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
    data.append("addressDocumentType", addressDocumentType);
    data.append("address1", values.address1);
    data.append("address2", values.address2);
    data.append("city", values.city);
    data.append("country", country);
    data.append("file", file);
    submitValidator(event, fetchData);
  };

  return (
    <MainLayout>
      <ContentWrapper verfication>
        <HeaderWrapper>
          <SuperHeading alignCenter margin32>
            Address Verification
          </SuperHeading>
          <div className="imageWrapper">
            <img src={IdIcon} alt="email icon" />
          </div>
          <SubHeading margin32>
            Upload Document That Proof Your Address Such As: Bill (Phone,
            Electricity, Water, Bank Statement
          </SubHeading>
        </HeaderWrapper>
        <form onSubmit={submitHandler}>
          <DropDown
            items={[
              { id: "water_bill", label: "Water Bill" },
              { id: "phone_bill", label: "Phone Bill" },
              { id: "bank_statement", label: "Bank Statement" },
              { id: "electricity_bill", label: "Electricity Bill" },
              { id: "other", label: "other" },
            ]}
            initItem="water_bill"
            label="Document Type"
            stateHandler={setAddressDocumentType}
          />
          <StyledFlexWrapper>
            <Input
              label="Adress 1"
              type="text"
              name="address1"
              placeholder="Enter  Address 1"
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={
                touched.address1 && errors.address1 && errors.address1
              }
              backendError={error && error}
            />
            <Input
              label="Adress 2"
              type="text"
              name="address2"
              placeholder="Enter Address2 "
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={
                touched.address2 && errors.address2 && errors.address2
              }
              backendError={error && error}
            />
          </StyledFlexWrapper>
          <StyledFlexWrapper>
            <Input
              label="City"
              type="text"
              name="city"
              placeholder="Enter City "
              stateHandler={changeHandler}
              blur={blurHandler}
              errorState={touched.city && errors.city && errors.city}
              backendError={error && error}
            />
            <DropDown
              items={[
                { id: "Palestine", label: "Palestine" },
                { id: "phone_bill", label: "Phone Bill" },
                { id: "bank_statement", label: "Bank Statement" },
                { id: "electricity_bill", label: "Electricity Bill" },
                { id: "other", label: "other" },
              ]}
              initItem="Palestine"
              label="Country"
              stateHandler={setCountry}
            />
          </StyledFlexWrapper>
          <UploadFile
            onFileSuccess={setFile}
            acceptedTypes={["jpg", "png"]}
            hintMessage="Your document shouldn't be three months old"
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Continue"}
          </Button>
        </form>
        {error && !error.key && <ErrorStatment>{error.message}</ErrorStatment>}
      </ContentWrapper>
    </MainLayout>
  );
};

export default VerifyAdress;
