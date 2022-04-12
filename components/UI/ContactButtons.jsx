import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./styling/ContactButtons.module.css";

const ContactButtons = () => {
  return (
    <div className={styles["socials-container"]}>
      <div className={styles["button-container"]}>
        <a
          className={styles["contact-button"]}
          href="https://www.linkedin.com/in/andrew-m-394714136/"
        >
          <LinkedIn fontSize="large" />
        </a>
      </div>
      <div className={styles["button-container"]}>
        <a
          className={styles["contact-button"]}
          href="https://github.com/vndrewhk/"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <div className={styles["button-container"]}>
        <a
          className={styles["contact-button"]}
          href="mailto:andrewhkma@gmail.com"
        >
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
