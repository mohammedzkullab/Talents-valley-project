import { useState, useEffect } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import { Heading } from "../../../../designsystem/typography";
import CreateForm from "./CreateForm";
import { StyledCreateInvoiceWrapper } from "./style";

const CreateInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({});
  const changeHandler = (event) => {
    setInvoiceData({
      ...invoiceData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    console.log(invoiceData);
  }, [invoiceData]);
  return (
    <StyledCreateInvoiceWrapper>
      <div className="card-with-heading">
        <Heading>Create Invoice Records</Heading>
        <ContentWrapper
          width={830}
          paddingTop={40}
          paddingRight={36}
          paddingBottom={40}
          paddingLeft={36}
        >
          <CreateForm changeHandler={changeHandler} invoiceData={invoiceData} />
        </ContentWrapper>
      </div>
      <div className="card-with-heading">
        <Heading>Preview</Heading>

        <ContentWrapper
          width={732}
          paddingLeft={63}
          paddingRight={63}
          paddingBottom={46}
          paddingTop={46}
        >
          {invoiceData.freelancerName}
          {invoiceData.date}
          {invoiceData.status}
        </ContentWrapper>
      </div>
    </StyledCreateInvoiceWrapper>
  );
};

export default CreateInvoice;
