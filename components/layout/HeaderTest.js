import React, {useState} from "react";

const HeaderTest = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container ">
          <a  to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <p className={click ? "XXXXX" : "|||||||"}></p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTest;
