import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div>Error logging in! Please try again.</div>
      <div>Please wait...redirecting...</div>
      <div>
        If you are not redirected in 5 seconds, &nbsp;
        <Link href="/" passHref>
          <a className="error-button">please click here</a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
