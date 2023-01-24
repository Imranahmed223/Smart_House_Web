import React from "react";
import './Button.scss'
const Button = ({ text, ...props }) => {
  return (
    <>
      <button {...props} className="btn">
        {text}
      </button>
    </>
  );
};

export default Button;
