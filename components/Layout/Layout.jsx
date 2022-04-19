import Headroom from "react-headroom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "./styling/Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles["layout-container"]}>
      <Headroom className={styles["headroom"]}>
        <NavBar></NavBar>
      </Headroom>

      {props.children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
