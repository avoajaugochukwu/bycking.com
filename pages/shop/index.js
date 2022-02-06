import Head from "next/head";
import ShopScreen from "../../screens/Shop";

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Cumba bikes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ShopScreen />
      </div>
    </div>
  );
}
