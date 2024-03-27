import Button from "../../components/Button";
import Input from "../../components/Input";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='top'>
          <p className='logo'>LOGO</p>
          <span>Updates right to your Inbox</span>
        </div>
        <div className='bottom'>
          <ul>
            <li>&copy; Logo2024</li>
            <li>Privacy policy</li>
            <li>Cookies policy</li>
            <li>Terms of use</li>
          </ul>
          <div>
            <Input>Email Address</Input>
            <Button primary>Send</Button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
