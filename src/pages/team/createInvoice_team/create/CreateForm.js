import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import DropDown from "../../../../components/DropDown/DropDown";
import Input from "../../../../components/Input/Input";
import JobDetail from "./JobDetail";

const CreateForm = ({ changeHandler, submitHandler, loading }) => {
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });
  const [jobDetails, setJobDetails] = useState({
    itemName: "",
    description: "",
    price: 0,
  });
  const [data, setData] = useState({
    currency: "USD",
    freelancerId: "63a6ec02e22006927990bb36",
    // service: "",
    date: "2022-10-06 08:00:00",
    status: "paid",
    paymentMethod: "",
    paymentFee: "",
  });
  const dataHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const clientHandler = (event) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    });
  };

  const jobDetailsHandler = (event) => {
    if (event.target.name === "price") {
      setJobDetails({
        ...jobDetails,
        [event.target.name]: +event.target.value,
      });
      return;
    }
    setJobDetails({
      ...jobDetails,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    changeHandler({
      client: client,
      fixed: [{ ...jobDetails }],
      ...data,
    });
  }, [data, client, jobDetails, changeHandler]);
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Input
        label="Freelancer Name"
        type="text"
        name="freelancerName"
        placeholder="Enter Freelancer Name"
        // stateHandler={(e) => {
        //   dataHandler(e);
        // }}
        //   blur={blurHandler}
        //   errorState={
        //     touched.firstName && errors.firstName && errors.firstName
        //   }
        //   backendError={error && error}
      />
      <div className="double-fields">
        <Input
          label="Date"
          type="date"
          name="date"
          stateHandler={(e) => {
            dataHandler(e);
          }}
          //   blur={blurHandler}
          //   errorState={
          //     touched.lastName && errors.lastName && errors.lastName
          //   }
          //   backendError={error && error}
        />
        <DropDown
          items={[
            { id: "paid", label: "Paid" },
            { id: "sent", label: "Sent" },
            { id: "pendingPayment", label: "Pending payment" },
          ]}
          initItem="paid"
          label="Status"
          name="status"
          stateHandler={dataHandler}
        />
      </div>
      <DropDown
        items={[
          { id: "Palestine", label: "Palestine" },
          { id: "UAE", label: "UAE" },
          { id: "USA", label: "USA" },
          { id: "UK", label: "UK" },
        ]}
        name="service"
        initItem="Palestine"
        label="Service Number (optional)"
        // stateHandler={changeHandler}
      />

      <div className="clientInfo">
        <label>client Info</label>

        <div className="double-fields">
          <Input
            label=" "
            type="text"
            name="firstName"
            placeholder="First Name"
            stateHandler={(e) => {
              clientHandler(e);
            }}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
          <Input
            label=" "
            type="text"
            name="lastName"
            placeholder="Last Name"
            stateHandler={(e) => {
              clientHandler(e);
            }}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
        </div>
        <Input
          label=" "
          type="email"
          name="email"
          placeholder="Email"
          stateHandler={(e) => {
            clientHandler(e);
          }}
          // blur={blurHandler}
          // errorState={touched.email && errors.email && errors.email}
          // backendError={error && error}
        />
        <div className="double-fields ">
          <div className="width-75">
            <DropDown
              items={[
                { id: "Palestine", label: "Palestine" },
                { id: "UAE", label: "UAE" },
                { id: "USA", label: "USA" },
                { id: "UK", label: "UK" },
              ]}
              initItem="Palestine"
              label=" "
              name="country"
              stateHandler={(e) => {
                clientHandler(e);
              }}
            />
          </div>
          <div className="width-25">
            <DropDown
              items={[
                { id: "USD", label: "USD" },
                { id: "ILS", label: "ILS" },
                { id: "EU", label: "EU" },
              ]}
              name="currency"
              initItem="USD"
              label=" "
              stateHandler={(e) => {
                dataHandler(e);
              }}
            />
          </div>
        </div>
      </div>

      <JobDetail changeHandler={jobDetailsHandler} />
      <DropDown
        items={[
          { id: "paypal", label: "paypal" },
          { id: "stripe", label: "stripe" },
        ]}
        name="paymentMethod"
        initItem="paypal"
        label="Payment Method"
        stateHandler={(e) => {
          dataHandler(e);
        }}
      />

      <Input
        label="Other Payment"
        type="text"
        name="otherPayment"
        placeholder=""
        stateHandler={(e) => {
          dataHandler(e);
        }}
        // blur={blurHandler}
        // errorState={touched.email && errors.email && errors.email}
        // backendError={error && error}
      />
      <div className="width-25">
        <Input
          label="Payment Gateway Fees"
          type="number"
          name="paymentFee"
          placeholder="$ 0.00"
          stateHandler={(e) => {
            dataHandler(e);
          }}
          // blur={blurHandler}
          // errorState={touched.email && errors.email && errors.email}
          // backendError={error && error}
        />
      </div>
      <Button type="submit" loading={loading}>
        Add Invoice
      </Button>
      {/* {error && !error.key && (
    <ErrorStatment>{error.message}</ErrorStatment>
  )}
  {error && error.key && (
    <ErrorStatment>
      {error.key} is {error.message}
    </ErrorStatment>
  )} */}
    </form>
  );
};

export default CreateForm;
