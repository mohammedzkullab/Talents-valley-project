import React from "react";
import { Link } from "react-router-dom";
import { ReminderWrapper } from "./style";

const Reminder = ({ children, url, urlText }) => {
  return (
    <ReminderWrapper>
      {children}
      <Link to={url}>{urlText}</Link>
    </ReminderWrapper>
  );
};

export default Reminder;
