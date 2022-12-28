import { useState, useEffect, useCallback, useContext } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import { Heading } from "../../../../designsystem/typography";
import CreateForm from "./CreateForm";
import { StyledCreateInvoiceWrapper } from "./style";
import { API_URL } from "../../../../Constants";
import useFetch from "../../../../hooks/useFetch";
import { AuthContext } from "../../../../store/AuthContext";
const CreateInvoice = () => {
  const auth = useContext(AuthContext);
  const [invoiceData, setInvoiceData] = useState({});

  const url = `${API_URL}team/invoice/add`;
  const options = {
    method: "post",
    body: JSON.stringify({ freelancerId: "63513dff2213ea062bce8810" }),
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  const dataSync = useCallback((data) => {
    console.log("data", data);
  }, []);
  // const { loading, fetchData } = useFetch(url, options, dataSync);
  /*{
      client: {
        firstName: "test",
        lastName: "test",
        email: "test@gmail.com",
        country: "Palestine",
      },
      fixed: [
        {
          itemName: "master job",
          description: "test invoice",
          price: 200,
        },
        {
          itemName: "master job",
          description: "test invoice",
          price: 300,
        },
      ],
      currency: "USD",
      freelancerId: "63513dff2213ea062bce8810",
      service: "6351bce9dc158ca2d6012e46",
      paymentMethod: "63359b01bf6ef6878c96f87d",
      paymentFee: "50",
      ourFee: "20",
      date: "2022-10-06 08:00:00",
      status: "paid",
    } */
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => dataSync(data));
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
          <CreateForm
            changeHandler={setInvoiceData}
            invoiceData={invoiceData}
            submitHandler={submitHandler}
            // loading={loading}
          />
        </ContentWrapper>
      </div>
      <div className="card-with-heading sticky">
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
