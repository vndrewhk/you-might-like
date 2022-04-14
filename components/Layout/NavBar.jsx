import Link from "next/link";

// hide on scroll down, show on scroll up
// https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
const NavBar = () => {
  return (
    <div className="navBar">
      <Link href="/">Home</Link>
      <Link href="/settings">Settings</Link>
      {/* <Link href="/redirect">Redirect</Link> */}
      {/* style={{ textDecoration: "none" }} */}
      {/* <NavLink className="mainNav" to="/" title="Home|Andrew Ma">
        <h2 className="hover-underline-animation">Andrew Ma</h2>
      </NavLink>
      <div className="headerLinks">
        <NavLink to="/about" title="About|Andrew Ma">
          <span className="hover-underline-animation">About</span>
        </NavLink>
        <NavLink to="/resume">
          <span className="hover-underline-animation">Resume</span>
        </NavLink> */}
    </div>
  );
};

export default NavBar;
