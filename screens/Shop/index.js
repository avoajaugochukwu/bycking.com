import ShopLayout from "./ShopLayout";
import WhiteHeader from "../../components/layout/WhiteHeader";
import ProductList from "./ProductList";

const Index = () => {
  return (
    <>
      <WhiteHeader />
      <ShopLayout>
        <ProductList />
      </ShopLayout>
    </>
  );
};

export default Index;
