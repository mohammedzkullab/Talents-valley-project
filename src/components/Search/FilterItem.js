import { StyledFilterItem } from "./style";

const FilterItem = ({ checked, setChecked }) => {
  return (
    <ul>
      {checked &&
        checked.map((item, index) => (
          <StyledFilterItem key={index}>
            <li>
              <input
                type="checkbox"
                value={item.val}
                checked={item.val}
                onChange={() => setChecked(item)}
              />
              {item.title}
            </li>
          </StyledFilterItem>
        ))}
    </ul>
  );
};

export default FilterItem;
