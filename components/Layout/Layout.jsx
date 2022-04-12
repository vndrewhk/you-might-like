import Headroom from "react-headroom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div>
      <Headroom>
        <NavBar></NavBar>
      </Headroom>

      {props.children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
