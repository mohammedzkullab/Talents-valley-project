/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ReactComponent as Indicator } from "../../assets/icons/Indicator.svg";
import "./DropDown.css";
function DropDown({
  items = [],
  label = "",
  initItem,
  stateHandler = (f) => f,
}) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initItem);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
  };
  useEffect(() => {
    if (selectedItem) {
      stateHandler(items.find((item) => item.id === selectedItem).id);
    }
  }, [selectedItem]);

  return (
    <div className="form-Input">
      <label className="title dropLabel">
        {label && label}
        {items && (
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              {selectedItem
                ? items.find((item) => item.id === selectedItem).label
                : setSelectedItem(initItem)}
              <Indicator className={`icon ${isOpen && "open"}`} />
            </div>
            <div className={`dropdown-body ${isOpen && "open"}`}>
              {items &&
                items.map((item) => (
                  <div
                    className="dropdown-item"
                    onClick={(e) => handleItemClick(e.target.id)}
                    id={item.id}
                    key={item.id}
                  >
                    <span
                      className={`dropdown-item-dot ${
                        item.id === selectedItem && "selected"
                      }`}
                    >
                      •{" "}
                    </span>
                    {item.label && item.label}
                  </div>
                ))}
            </div>
          </div>
        )}
      </label>
    </div>
  );
}

export default DropDown;
