import ShopLayout from "./ShopLayout";
import DesktopHeader from "../../components/layout/DesktopHeader";
import ProductList from "./ProductList";
import MobileHeader from "../../components/layout/MobileHeader";

const ShopScreen = () => {
  return (
    <>
      <DesktopHeader bgColor='bg-white' textColor='text-gray-800' />
      <MobileHeader color='cyan' />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
    </>
  );
};

export default ShopScreen;
