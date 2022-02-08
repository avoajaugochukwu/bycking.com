import Link from "next/link";
import CartSVG from "../svg/CartSVG";

const WhiteHeader = () => {
  return (
    <>
      <nav className=" sticky top-0 inset-x-0 z-50 bg-white dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            
            <Link href="/">
              <a
                className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300"
              >
                Brand
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
            <div className="flex md:flex-row md:mx-6">
              <Link href="/">
                <a className="my-1 text-sm font-medium text-gray-800 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                  Home
                </a>
              </Link>
              <Link href="/shop">
                <a className="my-1 text-sm font-medium text-gray-800 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                  Shop
                </a>
              </Link>
              <Link href="/">
                <a className="my-1 text-sm font-medium text-gray-800 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                  Contact
                </a>
              </Link>
              <Link href="/">
                <a className="my-1 text-sm font-medium text-gray-800 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                  About
                </a>
              </Link>
            </div>

            <div className="flex justify-center md:block">
              <Link href="/cart">
                <a className="relative text-gray-100 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                  <CartSVG stroke="#000" showItems={true} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default WhiteHeader;
