import React, { useState } from "react";

const PaymentMethods = () => {
  const [paymentType, setPaymentType] = useState(0);

  return (
    <>
      {/* ------------------------------------------------------------------------- */}
      <div className="border border-gray-300 rounded-sm mt-2">
        <label className="flex justify-between py-2 px-5 hover:cursor-pointer">
          <div className="flex pt-2">
            <input type="radio" name="payment_method" className="" />
            <div className="ml-2 text-xs -mt-[1px] font-medium tracking-widest text-gray-500">
              Credit / Debit Card
            </div>
          </div>
          <div className="flex">
            <div className="border border-gray-300 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="40">
                <path d="m0 26h40v-26h-40z" fill="#016fd0" />
                <path
                  d="m30.71 13.64v1.64h-4.17v1.14h4.07v1.64h-4.07v1.12h4.17v1.66l3.38-3.6zm-1.1-6.14-1.4-3.19h-4l-4.1 9.32h3.33v8.27h10.28l1.61-1.8 1.67 1.81h3v-2.63l-1.9-2.06 1.92-2v-2.64h-1.93v-5l-1.81 5h-1.76l-1.86-5v5h-4.2l-.6-1.46h-3.3l-.56 1.47h-2.26l3.26-7.27h2.55l3.19 7.21v-7.22h3.1l1.6 4.47 1.56-4.47h3v-1h-3.75l-.85 2.39-.85-2.39h-4.94zm-5.06 6.11v7.27h8.7l2.1-2.32 2.12 2.32h2.53v-.1l-3.34-3.53 3.34-3.59v-.05h-2.5l-2.1 2.3-2.08-2.3zm.7-4.11 1-2.31 1 2.31z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="border border-gray-300 rounded-md ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="40">
                <path d="m2.39 14.92s2.48.3 2.48-2-2.48-2-2.48-2zm-1.19-4.92h2a3 3 0 0 1 0 5.95h-2z" />
                <path d="m7.75 10h-1.2v6h1.2z" />
                <path
                  d="m11.51 11.35a1.33 1.33 0 0 0 -.89-.5.78.78 0 0 0 -.79.6c0 .29 0 .39.79.69s1.89.5 1.89 1.88a2 2 0 0 1 -2 2 2.64 2.64 0 0 1 -2.18-1.09l.79-.8a1.74 1.74 0 0 0 1.29.8.8.8 0 0 0 .9-.8c0-.29-.2-.59-.7-.79s-1.88-.4-1.88-1.69a1.74 1.74 0 0 1 1.88-1.78 3 3 0 0 1 1.69.69z"
                  fillRule="evenodd"
                />
                <path
                  d="m17.27 11.64a2.15 2.15 0 0 0 -1.49-.64 2.09 2.09 0 0 0 0 4.17 2.12 2.12 0 0 0 1.49-.7v1.39a3.31 3.31 0 0 1 -1.49.4 3.18 3.18 0 0 1 0-6.35 2.79 2.79 0 0 1 1.49.4z"
                  fillRule="evenodd"
                />
                <path d="m23.81 10h1.29l1.69 4 1.59-4h1.29l-2.58 6.15h-.7z" />
                <path d="m35.32 11v1.79h.68a.86.86 0 0 0 .8-.8v-.1a.79.79 0 0 0 -.8-.79h-.69zm-1.09-1h2a1.76 1.76 0 0 1 1.89 1.78 1.72 1.72 0 0 1 -1.29 1.69l1.78 2.48h-1.5l-1.59-2.38h-.1v2.38h-1.19z" />
                <path d="m33.34 12.34v1.09h-2.09v1.49h2.18v1.08h-3.37v-6h3.37v1.09h-2.18v1.29z" />
                <path
                  d="m20.94 16.11a3.08 3.08 0 1 0 -3.08-3.11 3.07 3.07 0 0 0 3.08 3.11z"
                  fill="#f16822"
                />
              </svg>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="border border-gray-300 rounded-md ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="40">
                <path d="m24.05 6.72h-8.05v13.21h8.1z" fill="#ff5f00" />
                <path
                  d="m16.79 13.33a8.35 8.35 0 0 1 3.21-6.61 8.41 8.41 0 0 0 -12.32 11.07 8.46 8.46 0 0 0 3.45 3.1 8.46 8.46 0 0 0 8.87-.95 8.39 8.39 0 0 1 -3.21-6.61z"
                  fill="#eb001b"
                />
                <path
                  d="m33.6 13.33a8.4 8.4 0 0 1 -13.6 6.6 8.42 8.42 0 0 0 2.37-10.28 8.56 8.56 0 0 0 -2.37-2.94 8.46 8.46 0 0 1 8.87-1 8.4 8.4 0 0 1 4.73 7.56z"
                  fill="#f79e1b"
                />
              </svg>
            </div>
            {/* ------------------------------------------------------------------------- */}
          </div>
        </label>
      </div>

      <div className="border border-gray-300 rounded-sm mt-2">
        <label className="flex justify-between py-2 px-5 hover:cursor-pointer">
          <div className="flex pt-2">
            <input type="radio" name="payment_method" className="" />
            <div className="ml-2 text-xs -mt-[1px] font-medium tracking-widest text-gray-500">
              Paypal
            </div>
          </div>
          <div>
            <div className="border border-gray-300 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="40">
                <path
                  d="m16.2 22.17.36-2.2h-4.63l2.66-16.22a.22.22 0 0 1 .08-.13.22.22 0 0 1 .14-.05h6.45c2.14 0 3.62.43 4.39 1.27a2.89 2.89 0 0 1 .71 1.27 4.44 4.44 0 0 1 0 1.75v.5l.37.19a2.77 2.77 0 0 1 .73.54 2.41 2.41 0 0 1 .54 1.28 5.21 5.21 0 0 1 0 1.86 6.27 6.27 0 0 1 -.8 2.11 4.25 4.25 0 0 1 -1.25 1.32 5.18 5.18 0 0 1 -1.69.73 8.56 8.56 0 0 1 -2.11.24h-.55a1.58 1.58 0 0 0 -1 .34 1.5 1.5 0 0 0 -.51.88v.2l-.63 3.87v.14a.15.15 0 0 1 0 .09h-.07z"
                  fill="#253b80"
                />
                <path
                  d="m27.06 8c0 .12 0 .24-.07.36-.85 4.2-3.76 5.66-7.48 5.66h-1.89a.9.9 0 0 0 -.91.74l-1 5.91-.27 1.68a.35.35 0 0 0 0 .2.42.42 0 0 0 .1.17.38.38 0 0 0 .16.12.46.46 0 0 0 .2.05h3.4a.8.8 0 0 0 .8-.66v-.16l.63-3.86v-.21a.8.8 0 0 1 .79-.66h.51c3.25 0 5.8-1.27 6.54-4.94a4.09 4.09 0 0 0 -.57-3.76 3.1 3.1 0 0 0 -.94-.64z"
                  fill="#179bd7"
                />
                <path
                  d="m26.17 7.62a7.65 7.65 0 0 0 -.83-.18 10.34 10.34 0 0 0 -1.67-.11h-5.06a.8.8 0 0 0 -.52.18.76.76 0 0 0 -.27.47l-1.08 6.55v.19a.86.86 0 0 1 .31-.53.93.93 0 0 1 .6-.21h1.89c3.72 0 6.63-1.46 7.48-5.66 0-.12.05-.24.07-.36a4.65 4.65 0 0 0 -.7-.28z"
                  fill="#222d65"
                />
                <path
                  d="m17.82 8a.76.76 0 0 1 .27-.47.8.8 0 0 1 .52-.18h5.06a10.89 10.89 0 0 1 1.67.11 6.88 6.88 0 0 1 1 .24 4.86 4.86 0 0 1 .7.28 3.83 3.83 0 0 0 -.88-3.56c-1-1.06-2.7-1.51-4.92-1.51h-6.43a.91.91 0 0 0 -.91.75l-2.69 16.34a.55.55 0 0 0 0 .22.45.45 0 0 0 .12.21.59.59 0 0 0 .18.13.52.52 0 0 0 .24.05h4l1-6.1z"
                  fill="#253b80"
                />
              </svg>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default PaymentMethods;
