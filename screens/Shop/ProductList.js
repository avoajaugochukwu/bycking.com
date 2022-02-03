import ProductCard from "../../components/common/ProductCard";
import bikes_data from "../../data/bikes_data";

const ProductList = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-3 pt-10 pb-20">
        {bikes_data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
