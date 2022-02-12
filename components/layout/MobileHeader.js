/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import CloseSign from "../../components/svg/CloseSign";
import HamburgerMenu from "../../components/svg/HamburgerMenu";
import CartSVG from "../svg/CartSVG";

/**
 *
 * @returns Mobile header and text for Jumbotro on home screen
 */

const MobileHeader = ({ bgColor, color, showHomePageHero }) => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const getCartSVGColor = () => {
    let color = "#fff";

    if (showHomePageHero && click) {
      return color;
    }
    if (click) {
      return color
    }
    if (!click) {
      color = "#000";
      return color
    }
 
    return color
  }

  return (
    <div
      className={`block sm:hidden w-full h-full p1-2 ${
        click ? "fixed z-50 " : ""
      }`}
    >
      <div className={`h-16 relative pl-4 pt-4 pb-4 ${click && "bg-cyan-500"}`}>
        <div
          className={
            click
              ? "fixed w-screen h-full top-16 left-0 right-0 bottom-0 bg-cyan-500"
              : ""
          }
          onClick={() => Close()}
        />
        <nav className="bg-black/0 " onClick={(e) => e.stopPropagation()}>
          <div
            className={`flex justify-between ${
              click ? "sticky top-0 inset-x-0 z-50" : ""
            }`}
          >
            <Link href="/">
              <a className="mb-2">
                <img src="/bycking.logo.png" className="w-20" alt="logo" />
              </a>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-links" onClick={click ? handleClick : null}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop">
                  <a className="nav-links" onClick={click ? handleClick : null}>
                    Shop
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/comingsoon">
                  <a className="nav-links" onClick={click ? handleClick : null}>
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/comingsoon">
                  <a className="nav-links" onClick={click ? handleClick : null}>
                    Contact Us
                  </a>
                </Link>
              </li>
              <div
                className="w-6 mx-auto "
                onClick={click ? handleClick : null}
              >
                <div className="py-7">
                  <Link href="/cart">
                    <CartSVG showItems={true} />
                  </Link>
                </div>
              </div>
            </ul>
            <div className="z-50 pt-2 flex">
              <div className="mr-5">
                <Link href="/cart">
                  <a>
                  <CartSVG stroke={getCartSVGColor()} showItems={true} />
                  </a>
                </Link>
              </div>
              <div className="" onClick={handleClick}>
                {click ? (
                  <CloseSign color={click ? "white" : color} />
                ) : (
                  <HamburgerMenu color={color} />
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* If on home page */}
        {showHomePageHero && (
          <div className="px-2 mt-40 p-4 ">
            <p className="px-2 text-4xl text-white uppercase bg-black/40">
              Let your bike and gear <br />
              reflect your personality
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

MobileHeader.defaultProps = {
  bgColor: "White",
  color: "white",
  showHomePageHero: false,
};

export default MobileHeader;
