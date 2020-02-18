import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherPrors }) => (
  <button className="custom-button" {...otherPrors}>
    {children}
  </button>
);

export default CustomButton;
