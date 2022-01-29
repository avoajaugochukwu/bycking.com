import React, { useState } from "react";

import CloseSign from "../../components/svg/CloseSign";
import HamburgerMenu from "../../components/svg/HamburgerMenu";

const HeaderTest = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div
        className={
          click ? "absolute top-0 left-0 right-0 bottom-0 bg-white/40" : ""
        }
        onClick={() => Close()}
      />
      <nav className="bg-black/0 " onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* navbar */}
        <div className=" flex">
          {" "}
          {/* nav-container */}
          <a to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a className="nav-links" onClick={click ? handleClick : null}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={click ? handleClick : null}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={click ? handleClick : null}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={click ? handleClick : null}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className=" text-yellow-400 pt-4" onClick={handleClick}>
            <p className="">
              {click ? <CloseSign /> : <HamburgerMenu />}

              {click ? <CloseSign /> : <CloseSign />}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTest;
