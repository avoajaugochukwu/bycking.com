import Head from "next/head";
import CartScreen from "../../screens/Cart";

export default function Cart() {
  return (
    <>
      <Head>
        <title>
          Bycking | Cart
        </title>
        <meta name="description" content="Bycking | Cart" />
      </Head>
      <CartScreen />
    </>
  );
}
