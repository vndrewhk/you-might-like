import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "../../styling/css/UI.css";
const ContactButtons = () => {
  return (
    <div className="socials-container">
      <div className="button-container">
        <a
          className="contact-button"
          href="https://www.linkedin.com/in/andrew-m-394714136/"
        >
          <LinkedIn fontSize="large" />
        </a>
      </div>
      <div className="button-container">
        <a className="contact-button" href="https://github.com/vndrewhk/">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <div className="button-container">
        <a className="contact-button" href="mailto:andrewhkma@gmail.com">
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
