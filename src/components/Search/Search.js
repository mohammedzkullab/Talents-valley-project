import { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { StyledFilter, StyledSearch } from "./style";
import { StyledPopup } from "../tableAction/style";
import FilterItem from "./FilterItem";

const Search = ({ setSearch: onSearchSubmit, setSearchFilters }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState([
    { title: "Team members", key: "isTeam", val: false },
    { title: "Blocked", key: "isBlocked", val: false },
    { title: "Oldest to newest", key: "sort", val: false },
    { title: "All", key: "all", val: true },
  ]);
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    } else {
      onSearchSubmit("");
    }
  }, [onSearchSubmit, term]);
  const checkHandler = (changedValue) => {
    const changedIndex = checked.findIndex(
      (item) => item.key === changedValue.key
    );
    const newArr = [...checked];
    newArr[changedIndex] = {
      ...newArr[changedIndex],
      val: !newArr[changedIndex].val,
    };
    setChecked(newArr);
    setSearchFilters((prev) => [...prev].push(changedValue.key));
  };

  return (
    <StyledSearch>
      <SearchIcon />
      <input
        type="search"
        placeholder="search"
        value={debouncedTerm}
        onChange={(e) => setDebouncedTerm(e.target.value)}
      />
      <StyledFilter>
        <div onClick={() => setToggle((prev) => !prev)}>
          <FilterIcon />
        </div>
        {toggle && (
          <StyledPopup>
            <FilterItem checked={checked} setChecked={checkHandler} />
            {/* <ul>
            
              <FilterItem
                title="Blocked"
                checked={checked.blocked}
                setChecked={setChecked}
              />
              <FilterItem
                title="Oldest to newest"
                checked={checked.oldest}
                setChecked={setChecked}
              />
              <FilterItem
                title="All"
                checked={checked.all}
                setChecked={setChecked}
              />
            </ul> */}
          </StyledPopup>
        )}
      </StyledFilter>
    </StyledSearch>
  );
};

export default Search;
