import Header from "./Header";
import Footer from "./Footer";

const Reg = () => {
  return (
    <div id="reg">
      <Header />
      <main>
        <div className="title">
          <h2>Регистрация</h2>
        </div>

        <form>
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="pass">Пароль</label>
          <input type="password" />
          <div className="buttons">
            <button>Регистрация</button>
            <button>Назад</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Reg;
