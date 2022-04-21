import { Button, Typography } from "@mui/material";
import styles from "./styling/UnloggedHome.module.css";
import Typewriter from "typewriter-effect";
const UnloggedHome = () => {
  const handleLogin = () => {
    window.location = `${process.env.NEXT_PUBLIC_AUTHORIZE_URL}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return (
    <div className={styles["unlogged-container"]}>
      <div className={styles["text-container"]}>
        <Typography className={styles["logo-text"]} variant="h3" container="h3">
          You Might Like&nbsp;
        </Typography>
        <Typography variant="h5" container="h5">
          is a tool that helps users find artists related to the ones
          they&#39;re currently listening to.
        </Typography>
      </div>
      <div className="typewriters">
        <div className="typewriter-container">
          <div className="wrap">
            <Typography className="gradient-text" variant="h3" component="h3">
              In the mood for some Drake? How about
            </Typography>
            <Typography variant="p" component="p">
              &nbsp;&nbsp;
            </Typography>
          </div>
          <Typewriter
            className={styles["typewriter"]}
            options={{
              cursorClassName: "Typewriter__cursor",
              delay: 75,
              deleteSpeed: 5,
              strings: [
                `<h2><span style="color: #27ae60;">J. Cole?</span></h2>`,
                '<h2><span style="color: #27ae60;">Tory Lanez?</span></h2>',
                '<h2><span style="color: #27ae60;">Future?</span></h2>',
                '<h2><span style="color: #27ae60;">NAV?</span></h2>',
                '<h2><span style="color: #27ae60;">21 Savage?</span></h2>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="typewriter-container">
          <div className="wrap">
            <Typography className="gradient-text" variant="h3" component="h3">
              More of a Taylor Swift fan? Maybe try
            </Typography>
            <Typography variant="p" component="p">
              &nbsp;&nbsp;
            </Typography>
          </div>
          <Typewriter
            className={styles["typewriter"]}
            options={{
              cursorClassName: "Typewriter__cursor",
              delay: 75,
              deleteSpeed: 5,
              strings: [
                `<h2><span style="color: #27ae60;">Demi Lovato.</span></h2>`,
                '<h2><span style="color: #27ae60;">Troye Sivan.</span></h2>',
                '<h2><span style="color: #27ae60;">Lorde.</span></h2>',
                '<h2><span style="color: #27ae60;">Miley Cyrus.</span></h2>',
                '<h2><span style="color: #27ae60;">Hailee Steinfeld.</span></h2>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      {/* typewriter here -> In the mood for some Drake? How about: <Typewriter> */}
      {/* More of a Taylor Swift fan? Maybe try <Typewriter> */}

      <div className={styles["try-out"]}>
        <Typography variant="h4" container="h4">
          Come try it out. You&#39;ve got a world of Music to discover.
        </Typography>
        <Button
          className={`${styles["hover-underline-animation"]}`}
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            height: 100,
            fontSize: 20,
            minWidth: 300,
            color: "black",
            backgroundColor: "#1fdf64",
            border: "2px solid black",
            padding: 0,
            "&:hover": {
              color: "black",
              border: "2px solid white",
              backgroundColor: "#42ed80",
            },
          }}
          variant="contained"
          type="submit"
          onClick={handleLogin}
        >
          Connect to spotify
        </Button>
      </div>
    </div>
  );
};

export default UnloggedHome;

{
  /* <Typewriter
className={styles["typewriter"]}
options={{
  cursorClassName: "Typewriter__cursor",
  delay: 75,
  deleteSpeed: 5,
  strings: [
    `<h2><span style="color: #27ae60;">J. Cole?</span></h2>`,
    '<h2><span style="color: #27ae60;">Tory Lanez?</span></h2>',
    '<h2><span style="color: #27ae60;">Future?</span></h2>',
    '<h2><span style="color: #27ae60;">NAV?</span></h2>',
    '<h2><span style="color: #27ae60;">21 Savage?</span></h2>',
  ],
  autoStart: true,
  loop: true,
}}
/> */
}
