import ShopSearchSection from "./ShopSearchSection";

const ShopLayout = (props) => {
  return (
    <div className="">
      <div className=" sm:flex px-6 sm:px-10">
        <aside className="min-w-full px-1 w- text-white bg-gray-700 fixed"></aside>
        <ShopSearchSection />
        {/* ------------------------- */}
        <main className=" md:pl-32 min-h-screen">{props.children}</main>
      </div>
    </div>
  );
};

export default ShopLayout;
