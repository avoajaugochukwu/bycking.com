import "../styles/globals.css";
import CartContextProvider from "../store/context/CartContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}

export default MyApp;
