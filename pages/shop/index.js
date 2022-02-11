import Head from "next/head";
import ShopScreen from "../../screens/Shop";

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Bycking | Bike Shop</title>
        <meta name="description" content="Bycking | Bike Shop" />
      </Head>

      <div>
        <ShopScreen />
      </div>
    </div>
  );
}
