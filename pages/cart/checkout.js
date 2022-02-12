import Head from "next/head";
import CheckoutScreen from "../../screens/Cart/Checkout";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Bycking | Checkout</title>
        <meta name="description" content="Bycking | Cart" />
      </Head>
      <CheckoutScreen />
    </>
  );
}
