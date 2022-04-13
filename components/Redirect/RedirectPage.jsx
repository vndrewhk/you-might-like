import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();
  const pid = router.asPath;
  console.log(router.asPath);
  //   console.log(pid.split("access_token=")[1]);
  let accessToken = pid.split("access_token=")[1];

  if (accessToken) {
    accessToken = accessToken.split("&token_type");
  }
  console.log(accessToken);
  //   console.log(typeof accessToken);
  //   pid.split("access_token=");
  //   pid.split("&token_type=");
  //   pid.split("expires_in=");
  console.log(pid);
  //   store asPath in localstorage
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("access_token", `${accessToken[0]}`);
    localStorage.setItem("token_type", "Bearer");
    localStorage.setItem("expires_in", "3600");
    router.replace("/");
  }, []);
  return <div>Please waiting...redirecting..</div>;
};

// on load, store all the information in local storage
// then redirect back to main page
// set a timeOut for X seconds, and once that's done, clear local storage? prompt a login again?

export default RedirectPage;
