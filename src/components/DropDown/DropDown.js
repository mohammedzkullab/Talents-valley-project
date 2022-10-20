import { useState } from "react";
import { ReactComponent as Indicator } from "../../assets/icons/Indicator.svg";
import "./DropDown.css";
import "../../GeneralStyle.css";
// function DropDown({ items = [], label = "" }) {
//   return (
//     <div className="form-Input">
//       <label className="title">
//         {label}
//         <select className="dropdown_select">
//           {items &&
//             items.map((item, i) => (
//               <option key={i} value={item} className="dropdown_option">
//                 {item}
//               </option>
//             ))}
//         </select>
//       </label>
//     </div>
//   );
// }

// export default DropDown;
const DropDown = ({ items = [], label = "" }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  return (
    <div className="input_wrapper">
      <label className="title">{label}</label>

      <div className="button_wrapper">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={
            isOptionsOpen ? "dropdown_button expanded" : "dropdown_button"
          }
          onClick={toggleOptions}
        >
          {items[selectedOption]}
        </button>
        <Indicator className="indicator" />
      </div>
      <ul
        className={`options ${isOptionsOpen ? "show" : ""}`}
        role="listbox"
        aria-activedescendant={items[selectedOption]}
        tabIndex={-1}
      >
        {items.map((option, index) => (
          <li
            id={option}
            role="option"
            aria-selected={selectedOption === index}
            tabIndex={0}
            key={index}
            onClick={() => {
              setSelectedThenCloseDropdown(index);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DropDown;
