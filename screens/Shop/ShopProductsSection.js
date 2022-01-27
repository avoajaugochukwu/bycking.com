import ShopProductsData from "./ShopProductsData";

const ShopProductsSection = () => {
  return (
    <div>
      <div className="flex gap-x-5 px-3 pt-10 pb-20">
        {ShopProductsData.map((product, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-md cursor-pointer rounded-lg py-4"
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
    </div>
  );
  {
    /*  */
  }
};

export default ShopProductsSection;
