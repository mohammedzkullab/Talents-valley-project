import Input from "../../../../components/Input/Input";
import TextArea from "../../../../components/TextArea/TextArea";

const JobDetails = () => {
  return (
    <div className="clientInfo">
      <label>Job Details</label>
      <div className="double-fields ">
        <div className="width-75">
          <Input
            label=" "
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            // stateHandler={changeHandler}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
        </div>
        <div className="width-25">
          <Input
            label=" "
            type="number"
            name="JobFee"
            placeholder="$ 0.00"
            // stateHandler={changeHandler}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
        </div>
      </div>
      <TextArea resize={false} placeholder="Details" />
    </div>
  );
};

export default JobDetails;
