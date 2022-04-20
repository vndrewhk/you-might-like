import ContactButtons from "../UI/ContactButtons";
import styles from "./styling/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <ContactButtons></ContactButtons>
      <div>Designed and developed by Andrew Ma</div>
    </div>
  );
};

export default Footer;
