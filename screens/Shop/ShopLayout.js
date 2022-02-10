const ShopLayout = (props) => {
  
  return (
    <div className="">
      <div className="flex ">
        <aside className="min-w-full px-1 w-60 text-white bg-gray-700 fixed">
          {/* <div className=""> */}
        </aside>
        ;kkk
        {/* </div> */}
        <main
          className=" md:pl-60 min-h-screen"
          // style={{ height: "1000px" }}
        >
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default ShopLayout;
