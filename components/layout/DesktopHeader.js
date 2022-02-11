/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CartSVG from "../svg/CartSVG";

export default function DesktopHeader({ bgColor, textColor }) {
  return (
    <>
      <nav className={`${ bgColor === 'bg-transparent' ? 'bg-transparent' : 'bg-white' } hidden sm:block sticky top-0 inset-x-0 z-50`}>
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="">
                <img src="/bycking.logo.png" className="w-20 h-10" alt="logo" />
              </a>
            </Link>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="items-center md:flex">
            {/* <div className="flex flex-col md:flex-row md:mx-6"> */}
            <div className={`flex md:flex-row md:mx-6 font-medium text-sm ${textColor === 'text-white' ? 'text-white' : 'text-gray-800'}`}>
              <Link href="/">
                <a className="my-1 hover:text-cyan-500 md:mx-4 md:my-0">Home</a>
              </Link>
              <Link href="/shop">
                <a className="my-1 hover:text-cyan-500 md:mx-4 md:my-0">Shop</a>
              </Link>
              <Link href="/comingsoon">
                <a className="my-1 hover:text-cyan-500 md:mx-4 md:my-0">
                  Contact
                </a>
              </Link>
              <Link href="/comingsoon">
                <a className="my-1 hover:text-cyan-500 md:mx-4 md:my-0">
                  About
                </a>
              </Link>
            </div>

            <div className="flex justify-center md:block">
              <Link href="/cart">
                <a className="relative">
                  <CartSVG stroke={textColor === 'text-white' ? '#FFF' : '#000'} showItems={true} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

DesktopHeader.defaultProps = {
  bgColor: "bg-transparent",
  textColor: "text-white"
}
