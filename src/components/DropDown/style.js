import styled from "styled-components/macro";
export const StyledDropDown = styled.div`
  background-color: white;
  position: relative;
  .dropLabel {
    color: var(--gray);
  }

  .dropdown-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 9px;
    padding: 13px;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-raduis);
    /* outline-color: #92aefa; */
    font-size: var(--font-size);
    width: 100%;
    /* height: 60px; */
  }

  .dropdown-body {
    display: none;
  }

  .dropdown-body.open {
    display: block;
    position: absolute;
    width: 100%;
    background: #fff;
    border-radius: var(--border-raduis);
    border: 1px solid var(--light-gray);
    max-height: 157px;
    overflow-y: scroll;
    z-index: 10000;
  }

  .dropdown-item {
    padding: 15px;
  }

  .dropdown-item:hover {
    cursor: pointer;
    background: var(--secondary-color);
  }

  .dropdown-item-dot {
    opacity: 0;
    color: #91a5be;
    transition: all 0.2s ease-in-out;
  }

  .dropdown-item-dot.selected {
    opacity: 1;
  }

  .icon {
    font-size: 13px;
    color: #91a5be;
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
  }

  .icon.open {
    transform: rotate(180deg);
  }
`;
