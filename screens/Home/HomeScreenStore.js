const PopularProducts = [
  {
    name: "Yeti SB115 The World Famous",
    description: "$2,495.00 Monthly from $62.38",
    imgURL: "/img/home_page/showcase/YetiCycles_SB115_T3_Turq_AXS.jpeg",
    numGears: 8,
    brakeType: "V Brakes",
    weightCategory: "20 - 25kg",
  },
  {
    name: "Raleigh Motus Tour Plus - Hub Gear",
    description: "$2,495.00 Monthly from $62.38",
    imgURL:
      "/img/home_page/popular_products/Motus-Tour-Plus-Lowstep-Blue-hub-image-1_1024x1024.jpeg",
    numGears: 8,
    brakeType: "V Brakes",
    weightCategory: "20 - 25kg",
  },
  {
    name: "Raleigh Willow",
    description: "$2,495.00 Monthly from $62.38",
    imgURL:
      "/img/home_page/popular_products/Willow-cherry-Image-1_1024x1024.jpeg",
    numGears: 8,
    brakeType: "V Brakes",
    weightCategory: "20 - 25kg",
  },
];

const HomeScreenStore = () => {
  return (
    <div className="bg-cyan-500">
      <div className="pt-14">
        <p className="text-center text-white text-2xl uppercase font-bold">
          Popular items
        </p>
      </div>
      <div className="flex gap-x-10 px-10 pt-10 pb-20">
        {PopularProducts.map((product, index) => (
          <div
            key={index}
            className="w-full bg-white cursor-pointer rounded-lg py-4"
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
      <div className="flex py-20 px-4">
        <div className="w-1/4">
          <div
            className="h-full justify-items-center "
            style={{ display: "grid" }}
          >
            <div className="self-center">
              <p className="text-5xl font-bold">
                GO YOUR <br />
                <span className="text-white">OWN</span> WAY
              </p>
              <button className="self-center bg-white py-2 w-full px-9 rounded-3xl">Find a store</button>
            </div>
            
          </div>
        </div>
        <div className="w-3/4">
          <img src="/img/home_page/raleigh-motus-ebike-shop.webp" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenStore;
