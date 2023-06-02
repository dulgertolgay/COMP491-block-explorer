import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
