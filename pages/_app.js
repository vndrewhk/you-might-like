// import "../styles/globals.css";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar";
import "../src/styling/css/globals.css";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
