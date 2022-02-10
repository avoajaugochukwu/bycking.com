import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="w-full flex py-10 sm:py-36 text-sm font-thin justify-between px-6">
          <div>
            <ul className="list-none text-white">
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Company
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Switch Infinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Sixfinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Materials
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Our Process
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <ul className="list-none text-gray-400">
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Company
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Switch Infinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Sixfinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Materials
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Our Process
              </li>
            </ul>
          </div>
          {/*  */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Company
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Switch Infinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Sixfinity
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Materials
              </li>
              <li className="my-3 hover:text-gray-300 cursor-pointer">
                Our Process
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="flex mt-5 sm:mt-[33%] ml-[30%] sm:ml-[33%]">
            <div className="h-full ">
              <input
                type="text"
                className="text-gray- bg-transparent border-b-2 border-b-gray-400 focus:border-b-gray-200 focus:outline-none px-4 placeholder-gray-600"
                placeholder="NEWSLETTER SIGN UP"
              />
            </div>

            <div className="ml-2 mt-1 cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/svg/new-email.svg"
                className="h-6 w-6 p-0"
                alt="enter email"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex py-8 font-thin text-xs">
        <div className="w-full flex flex-col sm:flex-row text-gray-400 justify-between pl-5">
          <p>&copy; cumba bikes 2022 All rights reserved. </p>
          <div className="flex gap-x-2">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Accessibility</p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
