import DesktopHeader from "../../../components/layout/DesktopHeader";

/**
 * 
 * @returns Video, header and hero for the desktop view
 * 
 */
const DesktopHero = () => {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        loop
        muted
        className="hidden sm:block video-tag z-0 relative w-full h-full"
      >
        <source src="/yeti.mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hidden sm:block video-overlay absolute left-0 top-0 z-10 w-full">
        <DesktopHeader />
        <div className="ml-4 mt:20 p-4 lg:ml-20 lg:mt-60 lg:p-0">
          <p className="text-4xl lg:text-7xl text-white uppercase">
            Let your bike and gear <br />
            reflect your personality
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
