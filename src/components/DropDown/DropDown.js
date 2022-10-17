import "./DropDown.css";
function DropDown({ items = [], label = "" }) {
  return (
    <div className="form-Input">
      <label className="title">
        {label}
        <select className="dropdown_select">
          {items &&
            items.map((item, i) => (
              <option key={i} value={item} className="dropdown_option">
                {item}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}

export default DropDown;
