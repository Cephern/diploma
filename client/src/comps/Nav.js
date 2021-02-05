const Nav = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/doctors">Наши Врачи</a>
        </li>
        <li>
          <a href="/about">О Нас</a>
        </li>
      </ul>

      <ul className="side-nav">
        <li>
          <a href="/login">Войти</a>
        </li>
        <li>
          <a href="/reg">Регистрация</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
