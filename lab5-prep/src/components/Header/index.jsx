import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Website logo" />
      </a>
    </header>
  );
}

export default Header;