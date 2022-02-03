import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div
      key={product.name}
      className="w-full bg-white shadow-md cursor-pointer rounded-lg py-4"
    >
      <div className="px-4 overflow-hidden">
        <p className="text-xl font-semibold">{product.name}</p>
        <p className="text-gray-500 font-thin">
          ${product.price}, monthly from ${Math.round(product.price / 24)}
        </p>

        <Link href={`/shop/${encodeURIComponent(product.url)}`} passHref={true}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="card-zoom-image h-60 p-10 min-w-full"
            alt="big-image"
            src={`${product.image1}`}
          />
        </Link>
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
              <span className="font-thin">Type: </span>
              <span className="font-light">{product.batterySize}</span>
            </>
          )}
        </div>
        <div>
          {product.wheel && (
            <>
              <span className="font-thin">Type: </span>
              <span className="font-light">{product.wheel}</span>
            </>
          )}
        </div>
        <div>
          {product.weight && (
            <>
              <span className="font-thin">Type: </span>
              <span className="font-light">{product.weight}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
