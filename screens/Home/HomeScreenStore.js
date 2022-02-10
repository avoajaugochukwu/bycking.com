/* eslint-disable @next/next/no-img-element */
import bikes_data from "../../data/bikes_data";
import ProductCard from "../../components/common/ProductCard";

const HomeScreenStore = () => {
  return (
    <div className="bg-cyan-500">
      <div className="pt-14">
        <p className="text-center text-white text-2xl uppercase font-bold">
          Popular items
        </p>
      </div>
      <div className=" md:flex gap-x-10 px-12 sm:px-10 pt-10 pb-20">
        {bikes_data.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="flex sm:py-20 py-5 px-4 sm:flex-row flex-col-reverse">
        <div className="sm:w-1/4 w-full mt-4">
          <div className="h-full justify-items-center flex ">
            <div className="self-center mx-3">
              <p className="text-5xl font-bold">
                GO YOUR <br />
                <span className="text-white">OWN</span> WAY
              </p>
              <div className="mr-10">
                <p className="font-light mr-5 text-sm">
                  Ready, set, pedal. With a bike, you can take on the world -
                  whether it&apos;s a commute, a challenging trail, or a great
                  workout.
                </p>

                <button className="self-center bg-white py-2 mt-6 w-full px-9 rounded-3xl mr-5">
                  Find a store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-3/4 w-full">
          <img
            src="/img/home_page/raleigh-motus-ebike-shop.webp"
            alt="woman on bike"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenStore;
