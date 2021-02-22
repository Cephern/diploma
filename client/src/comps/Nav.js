import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
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
