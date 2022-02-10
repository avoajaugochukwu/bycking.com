import React from "react";

import CloseSign from "../../components/svg/CloseSign";
import HamburgerMenu from "../../components/svg/HamburgerMenu";

const MobileHeader = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className="block sm:hidden w-full h-full bg-cyan-500/50">
      <div
        className={
          click ? "absolute top-14 left-0 right-0 bottom-0 bg-black/75" : ""
        }
        onClick={() => Close()}
      />
      <nav className="bg-black/0 " onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between ">
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
    </div>
  );
};

export default MobileHeader;
