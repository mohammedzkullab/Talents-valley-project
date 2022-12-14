import React from "react";
import Button from "../../../../components/Button/Button";
import DropDown from "../../../../components/DropDown/DropDown";
import Input from "../../../../components/Input/Input";
import JobDetails from "./JobDetails";

const CreateForm = ({ changeHandler, invoiceData }) => {
  return (
    <form onSubmit={() => {}}>
      <Input
        label="Freelancer Name"
        type="text"
        name="firstName"
        placeholder="Enter Freelancer Name"
        stateHandler={(e) => {
          changeHandler(e);
        }}
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
          placeholder="Enter last name "
          stateHandler={(e) => changeHandler(e)}
          //   blur={blurHandler}
          //   errorState={
          //     touched.lastName && errors.lastName && errors.lastName
          //   }
          //   backendError={error && error}
        />
        <DropDown
          items={[
            { id: "Palestine", label: "Palestine" },
            { id: "UAE", label: "UAE" },
            { id: "USA", label: "USA" },
            { id: "UK", label: "UK" },
          ]}
          initItem="Palestine"
          label="Status"
          // stateHandler={changeHandler}
        />
      </div>
      <DropDown
        items={[
          { id: "Palestine", label: "Palestine" },
          { id: "UAE", label: "UAE" },
          { id: "USA", label: "USA" },
          { id: "UK", label: "UK" },
        ]}
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
            // stateHandler={changeHandler}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
          <Input
            label=" "
            type="text"
            name="lastName"
            placeholder="Last Name"
            // stateHandler={changeHandler}
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
          // stateHandler={changeHandler}
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

              // stateHandler={setCountry}
            />
          </div>
          <div className="width-25">
            <DropDown
              items={[
                { id: "Palestine", label: "Palestine" },
                { id: "UAE", label: "UAE" },
                { id: "USA", label: "USA" },
                { id: "UK", label: "UK" },
              ]}
              initItem="Palestine"
              label=" "
              // stateHandler={setCountry}
            />
          </div>
        </div>
      </div>

      <JobDetails />
      <DropDown
        items={[
          { id: "Palestine", label: "Palestine" },
          { id: "UAE", label: "UAE" },
          { id: "USA", label: "USA" },
          { id: "UK", label: "UK" },
        ]}
        initItem="Palestine"
        label="Payment Method"
        // stateHandler={setCountry}
      />
      <Input
        label="Other Payment"
        type="text"
        name="otherPayment"
        placeholder=""
        stateHandler={(e) => changeHandler(e)}
        // blur={blurHandler}
        // errorState={touched.email && errors.email && errors.email}
        // backendError={error && error}
      />
      <div className="width-25">
        <Input
          label="Payment Gateway Fees"
          type="text"
          name="paymentGatewayFees"
          placeholder="$ 0.00"
          stateHandler={(e) => changeHandler(e)}
          // blur={blurHandler}
          // errorState={touched.email && errors.email && errors.email}
          // backendError={error && error}
        />
      </div>
      <Button type="submit" className="signup_btn">
        {/* {loading ? <Loader /> : "Sign up"} */}
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
