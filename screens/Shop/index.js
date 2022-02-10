import ShopLayout from "./ShopLayout";
import WhiteHeader from "../../components/layout/WhiteHeader";
import ProductList from "./ProductList";
import MobileHeader from "../../components/layout/MobileHeader";

const ShopScreen = () => {
  return (
    <>
      <WhiteHeader bgColor='bg-white' textColor='text-gray-800' />
      <MobileHeader />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
    </>
  );
};

export default ShopScreen;
