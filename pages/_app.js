// import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar";
import "../src/styling/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
