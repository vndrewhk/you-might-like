import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import styles from "./styling/NavBar.module.css";

const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const handleLogin = () => {
    window.location = `${process.env.NEXT_PUBLIC_AUTHORIZE_URL}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
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
        {!auth.access_token && (
          <Button variant="contained" type="submit" onClick={handleLogin}>
            Connect to spotify
          </Button>
        )}
        {auth.access_token && (
          <>
            <Button onClick={handleLogout} variant="contained" type="submit">
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
