import React from "react";

import CloseSign from "../../components/svg/CloseSign";
import HamburgerMenu from "../../components/svg/HamburgerMenu";

import MobileHeader from "../../components/layout/MobileHeader";

/**
 *
 * @returns Background Image, header and hero for the mobile view
 *
 */
const MobileHero = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className="block sm:hidden">
        <div
          style={{
            backgroundImage:
              "url('/img/home_page/buy-online-home-storyteller.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(255,255,255, 0.5)",
            height: "100vh",
          }}
        >
          <div className="w-full h-full bg-cyan-500/50">
            <div
              className={
                click
                  ? "absolute  top-20 left-0 right-0 bottom-0 bg-black/75"
                  : ""
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
                <div
                  className="z-5- text-yellow-400 pt-4"
                  onClick={handleClick}
                >
                  <p className="">
                    {click ? <CloseSign /> : <HamburgerMenu />}
                  </p>
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
        </div>
      </div>
    </>
  );
};

export default MobileHero;
