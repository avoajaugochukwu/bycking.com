import ProductCard from "../../components/common/ProductCard";
import bikes_data from "../../data/bikes_data";

const ProductList = () => {
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-4 px-3 pt-3 sm:pt-10 pb-20">
        {bikes_data.map((product, index) => (
          <ProductCard key={index} product={product} homePage={false} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
