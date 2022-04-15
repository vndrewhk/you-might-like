import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const RedirectPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pid = router.asPath;
  console.log(router.asPath);

  let accessToken = pid.split("access_token=")[1];

  if (accessToken) {
    accessToken = accessToken.split("&token_type");
  }

  const loginHandler = () => {
    dispatch(login("test"));
  };

  //   store asPath in localstorage
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("access_token", `${accessToken[0]}`);
    localStorage.setItem("token_type", "Bearer");
    localStorage.setItem("expires_in", "3600");
    loginHandler();
    // console.log(authActions.login);
    router.replace("/");
  }, []);
  return <div>Please waiting...redirecting..</div>;
};

// on load, store all the information in local storage
// then redirect back to main page
// set a timeOut for X seconds, and once that's done, clear local storage? prompt a login again?

export default RedirectPage;
