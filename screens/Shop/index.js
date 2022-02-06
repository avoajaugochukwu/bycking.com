import ShopLayout from "./ShopLayout";
import WhiteHeader from "../../components/layout/WhiteHeader";
import ProductList from "./ProductList";

const ShopScreen = () => {
  return (
    <>
      <WhiteHeader />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
    </>
  );
};

export default ShopScreen;
