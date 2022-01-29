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
          click ? "absolute  top-20 left-0 right-0 bottom-0 bg-black/75" : ""
        }
        onClick={() => Close()}
      />
      <nav className="bg-black/0 " onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* navbar */}
        <div className="flex justify-between ">
          {" "}
          {/* nav-container */}
          <a
            to="/"
            className="text-2xl font-bold text-gray-100 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300"
          >
            Brand
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
          <div className="z-5- text-yellow-400 pt-4" onClick={handleClick}>
            <p className="">{click ? <CloseSign /> : <HamburgerMenu />}</p>
          </div>
        </div>
      </nav>

      <div className="ml-4 mt-40 p-4 lg:ml-20 lg:mt-60 lg:p-0">
        <p className="text-4xl lg:text-7xl text-white uppercase">
          Let your bike and gear <br />
          reflect your personality
        </p>
      </div>
    </div>
  );
};

export default HeaderTest;
