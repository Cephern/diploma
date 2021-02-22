import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="main-nav">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/doctors">Наши Врачи</Link>
        </li>
        <li>
          <Link to="/about">О Нас</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
