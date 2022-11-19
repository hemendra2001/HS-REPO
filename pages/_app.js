import "../styles/globals.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js" />
      <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"/>
      <Script type="text/javascript" src="js/myscript.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
