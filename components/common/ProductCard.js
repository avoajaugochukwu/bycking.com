/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ProductCard({ product, homePage }) {
  return (
    <Link href={`/shop/${encodeURIComponent(product.url)}`} passHref={true}>
      <div
        key={product.name}
        className="w-full bg-white cursor-pointer rounded-lg py-4 product-box-shadow my-4 sm:my-0"
      >
        <div className="px-4 overflow-hidden">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-gray-500 font-thin">
                ${product.price}, monthly from ${Math.round(product.price / 24)}
              </p>
            </div>
            <div>
            <img src={product?.logo} alt={product?.brand} className="w-16 h-12" />
            </div>
          </div>
          <img
            className={`card-zoom-image h-60 min-w-full ${
              homePage ? "" : "px-2 py-8"
            }`}
            alt="big-image"
            src={`${product.image1}`}
          />
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4">
          <div>
            {product.electric && (
              <>
                <span className="font-thin">Type: </span>
                <span className="font-light">{product.electric}</span>
              </>
            )}
          </div>
          <div>
            {product.batterySize && (
              <>
                <span className="font-thin">Battery size: </span>
                <span className="font-light">{product.batterySize}</span>
              </>
            )}
          </div>
          <div>
            {product.wheel && (
              <>
                <span className="font-thin">Wheel: </span>
                <span className="font-light">{product.wheel}</span>
              </>
            )}
          </div>
          <div>
            {product.weight && (
              <>
                <span className="font-thin">Weight: </span>
                <span className="font-light">{product.weight}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.defaultProps = {
  product: {},
  homePage: true,
};
