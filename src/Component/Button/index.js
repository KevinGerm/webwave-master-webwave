import React from "react";
import "./style.css"

const Button = ({children, absolute}) => {
  return (
    <div className={absolute ? 'row-container absolute' : 'row-container'}>
      <button  className="button">
        <span className="actual-text">
          {children}
        </span>
        <span className="hover-text" aria-hidden="true">
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
