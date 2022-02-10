import MobileHeader from "../../components/layout/MobileHeader";

/**
 *
 * @returns Background Image, header and hero for the mobile view
 *
 */
const MobileHero = () => {

  return (
    <>
      <div className="block sm:hidden relative">
        {/* <div className="absolute top-0 left-0 w-full h-full -z-0 bg-black/50" ></div> */}
        <div
          style={{
            backgroundImage:
              "url('/img/home_page/buy-online-home-storyteller.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(255,7,0, 0.9)",
            height: "100vh",
          }}
        >
          <MobileHeader showHomePageHero={true} />
        </div>
      </div>
    </>
  );
};

export default MobileHero;
