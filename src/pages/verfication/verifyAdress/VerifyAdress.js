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
import { StyledFlexWrapper } from "./style";

const VerifyAdress = () => {
  const [addressDocumentType, setAddressDocumentType] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [file, setFile] = useState();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const url = "https://talents-valley.herokuapp.com/api/user/verify/address";
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
    data.append("address1", address1);
    data.append("address2", address2);
    data.append("city", city);
    data.append("country", country);
    data.append("file", file);
    fetchData();
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
              name="Adress1"
              placeholder="Enter  Address 1"
              stateHandler={setAddress1}
              //   blur={blurHandler}
              //   errorState={
              //     touched.firstName && errors.firstName && errors.firstName
              //   }
              backendError={error && error}
            />
            <Input
              label="Adress 2"
              type="text"
              name="Adress2"
              placeholder="Enter Address2 "
              stateHandler={setAddress2}
              //   blur={blurHandler}
              //   errorState={
              //     touched.lastName && errors.lastName && errors.lastName
              //   }
              backendError={error && error}
            />
          </StyledFlexWrapper>
          <StyledFlexWrapper>
            <Input
              label="City"
              type="text"
              name="City"
              placeholder="Enter City "
              stateHandler={setCity}
              //   blur={blurHandler}
              //   errorState={
              //     touched.firstName && errors.firstName && errors.firstName
              //   }
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
            // onFileFail={({ error }) => alert(error)}
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

export default VerifyAdress;
