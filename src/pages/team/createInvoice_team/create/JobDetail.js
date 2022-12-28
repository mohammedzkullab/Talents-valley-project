import Input from "../../../../components/Input/Input";
import TextArea from "../../../../components/TextArea/TextArea";

const JobDetail = ({ changeHandler }) => {
  return (
    <div className="clientInfo">
      <label>Job Details</label>
      <div className="double-fields ">
        <div className="width-75">
          <Input
            label=" "
            type="text"
            name="itemName"
            placeholder="Job Title"
            stateHandler={(e) => changeHandler(e)}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
        </div>
        <div className="width-25">
          <Input
            label=" "
            type="number"
            name="price"
            placeholder="$ 0.00"
            stateHandler={(e) => changeHandler(e)}
            // blur={blurHandler}
            // errorState={touched.email && errors.email && errors.email}
            // backendError={error && error}
          />
        </div>
      </div>
      <TextArea
        resize={false}
        placeholder="Details"
        name="description"
        stateHandler={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default JobDetail;
