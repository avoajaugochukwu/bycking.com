import ShopLayout from "./ShopLayout";
import WhiteHeader from "../../components/layout/WhiteHeader";
import ProductList from "./ProductList";

const ShopScreen = () => {
  return (
    <>
      <WhiteHeader bgColor='bg-white' textColor='text-gray-800' />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
    </>
  );
};

export default ShopScreen;
