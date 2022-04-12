import "../../styling/css/Footer.css";
import ContactButtons from "../../Components/UI/ContactButtons";

const Footer = () => {
  return (
    <div className="footer-container">
      <ContactButtons></ContactButtons>
      <div>Designed and developed by Andrew Ma</div>
    </div>
  );
};

export default Footer;
