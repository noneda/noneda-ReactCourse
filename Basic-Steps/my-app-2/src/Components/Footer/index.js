import Icons from "../../Utils/Icons";
import Links from "../../Utils/Links";

const Footer = () => (
  <footer className="section footer">
    <Links send={false} />
    <Icons send={false} />
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
);

export default Footer;
