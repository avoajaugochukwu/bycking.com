import React from "react";

const ShopSearchSection = () => {
  return (
    <>
      <div className="p-3 sm:p-10">
        <h1 className="mb-3">Categories</h1>
        <div className="flex flex-row sm:flex-col border-l-2 border-b-gray-800 pl-4 font-extralight text-sm">
          <p className="px-3 mt-3 sm:mt-1">Sports</p>
          <p className="px-3 mt-3">Electric</p>
          <p className="px-3 mt-3">Hybrid</p>
        </div>
      </div>
    </>
  );
};

export default ShopSearchSection;
