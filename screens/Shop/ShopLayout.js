import ShopProductsSection from "./ShopProductsSection";

const ShopLayout = () => {
  return (
    <div className="">
      <div className="flex ">
        <aside className="min-h-screen pt-4 px-1 w-60 text-white bg-gray-700 fixed">
          {/* <div className=""> */}
        </aside>
        ;kkk
        {/* </div> */}
        <main
          className=" md:pl-60 min-h-screen min-w-full"
          style={{ height: "10000px" }}
        >
          <ShopProductsSection />
        </main>
      </div>
    </div>
  );
};

export default ShopLayout;
