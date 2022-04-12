import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();
  const pid = router.asPath;
  console.log(router.asPath);
  //   store asPath in localstorage
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("access_token", "test");
    localStorage.setItem("token_type", "test");
    localStorage.setItem("expires_in", "test");
    router.replace("/");
  }, []);
  return <div>Please waiting...redirecting..</div>;
};

// on load, store all the information in local storage
// then redirect back to main page
// set a timeOut for X seconds, and once that's done, clear local storage? prompt a login again?

export default RedirectPage;
