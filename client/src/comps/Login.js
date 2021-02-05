import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div id="login">
      <Header />

      <main>
        <div className="title">
          <h2>Вход в Ваш аккаунт</h2>
        </div>
        <form>
          <label htmlFor="login">Логин</label>
          <input type="text" name="login" id="loginInput" />
          <label htmlFor="password">Пароль</label>
          <input type="password" />
          <div className="buttons">
            <button className="enter">Войти</button>
            <button className="reg">Регистрация</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
