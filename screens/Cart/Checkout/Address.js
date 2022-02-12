import React from "react";

const Address = () => {
  return (
    <div className=" h-screen w-full">.
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font ">
        Your details
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Please enter your details
      </p>
      {/* ---------------------------------------------------------------- */}
      <div className="justify-center">
        <div className="mb-3">
          <select
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-extralight text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Select country</option>
            <option value="1">US</option>
            <option value="2">Canada</option>
            <option value="3">Mexico</option>
          </select>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}

      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
        Save
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Please enter desired destination address
      </p>
    </div>
  );
};

export default Address;
