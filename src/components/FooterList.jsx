import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function FooterList({ children, title }) {
  const [isOpen, setisOpen] = useState(true);

  function clickHandler() {
    setisOpen(!isOpen);
  }
  return (
    // Küçük Ekranda Footer
    <div>
      <div className="d-lg-none">
        <div className="container">
          <div className="row" onClick={clickHandler}>
            <div className="col-11 my-3">
              <p>{title}</p>
            </div>
            <div className="col-1 my-3">
              {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          </div>
          <div className={`menu ${isOpen ? "d-none" : ""}`}>
            <div className="col-11 mt-3">{children}</div>
          </div>
        </div>
      </div>
      {/* Büyük ekranda Footer */}
      <div className="d-none d-lg-block">
        <div id="title">
          <p>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default FooterList;
