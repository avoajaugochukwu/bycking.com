import PopularProductsData from "./PopularProductsData";

const HomeScreenStore = () => {
  return (
    <div className="bg-cyan-500">
      <div className="pt-14">
        <p className="text-center text-white text-2xl uppercase font-bold">
          Popular items
        </p>
      </div>
      <div className=" md:flex gap-x-10 px-4 sm:px-10 pt-10 pb-20">
        {PopularProductsData.map((product, index) => (
          <div
            key={index}
            className="w-full bg-white cursor-pointer rounded-lg py-4 my-4"
          >
            <div className="px-4 overflow-hidden">
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-gray-500 font-thin -mt-4">
                {product.description}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={`card-zoom-image h-60 ${index === 0 ? "pt-3" : ""}`}
                alt="big-image"
                src={`${product.imgURL}`}
              />
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4">
              <div>
                <span className="font-thin">Number of gears: </span>
                <span className="font-light">{product.numGears}</span>
              </div>
              <div>
                <span className="font-thin">Brake Type: </span>
                <span className="font-light">{product.brakeType}</span>
              </div>
              <div>
                <span className="font-thin">Weight Category: </span>
                <span className="font-light">{product.weightCategory}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
      <div className="flex sm:py-20 py-5 px-4 sm:flex-row flex-col-reverse">
        <div className="sm:w-1/4 w-full mt-4">
          <div
            className="h-full justify-items-center flex "
            // style={{ display: "grid" }}
          >
            <div className="self-center mx-3">
              <p className="text-5xl font-bold">
                GO YOUR <br />
                <span className="text-white">OWN</span> WAY
              </p>
              <div className="mr-10">
              <p className="font-light mr-5 text-sm">
                Ready, set, pedal. With a bike, you can take on the
                world - whether it&apos;s a commute, a challenging trail, or a
                great workout.
              </p>
              
                <button className="self-center bg-white py-2 w-full px-9 rounded-3xl mr-5">
                  Find a store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-3/4 w-full">
          <img src="/img/home_page/raleigh-motus-ebike-shop.webp" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenStore;
