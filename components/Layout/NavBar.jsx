import Link from "next/link";
import styles from "./styling/NavBar.module.css";
// hide on scroll down, show on scroll up
// https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
const NavBar = () => {
  return (
    <div className={styles["navBar"]}>
      <Link className={styles["mainNav"]} href="/" passHref>
        <h2 className={styles["hover-underline-animation"]}>Home</h2>
      </Link>
      <div className={styles["headerLinks"]}>
        <Link c href="/settings" passHref>
          <span className={`${styles["hover-underline-animation"]}`}>
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
