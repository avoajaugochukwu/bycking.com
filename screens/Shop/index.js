import ShopLayout from "./ShopLayout";
import ProductList from "./ProductList";
import DesktopHeader from "../../components/layout/DesktopHeader";
import MobileHeader from "../../components/layout/MobileHeader";
import Footer from "../../components/layout/Footer";

const ShopScreen = () => {
  return (
    <>
      <DesktopHeader bgColor="bg-white" textColor="text-gray-800" />
      <MobileHeader color="cyan" />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
      <Footer />
    </>
  );
};

export default ShopScreen;
