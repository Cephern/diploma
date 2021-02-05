import { useState, useEffect } from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import Question from "./Question";
import DoctorsInput from "./DoctorsInput";

const Home = () => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      name: "character",
      body: "Опишите характер боли",
      asw1: "не болит",
      asw2: "болит после еды",
      asw3: "болит после холодного",
      asw4: "болит после горячего",
    },
    {
      id: 1,
      name: "duration",
      body: "Опишите длительность боли",
      asw1: "не болит",
      asw2: "боль проходит почти сразу, после устранения причины",
      asw3: "боль длится пару минут",
      asw4: "боль долго не проходит",
    },
    {
      id: 2,
      name: "regularity",
      body: "Опишите регулярность возникновения боли",
      asw1: "не болит",
      asw2: "болит после приемы пищи/питья",
      asw3: "болит само по себе, несколько раз в день, чаще ночью",
      asw4: "болит при накусывании на зуб",
    },
    {
      id: 3,
      name: "intesity",
      body: "Опишите интенсивность боли",
      asw1: "не болит",
      asw2: "боль жмущая, ноющая, больше раздражает, чем болит",
      asw3: "болит умеренно, проходит после приема обезболивающего",
      asw4: "болит сильно, боль распирающая, резкая, длительная",
    },
    {
      id: 4,
      name: "localisation",
      body: "Опишите локализацию боли",
      asw1: "не болит",
      asw2: "болит в зубе, могу указать зуб",
      asw3: "болит в зубе, не могу указать конкретный зуб",
      asw4: "болит в челюсти",
    },
    {
      id: 5,
      name: "color",
      body: "Опишите цвет беспокоящего зуба",
      asw1: "не беспокоит",
      asw2: "в цвете изменен, серый",
      asw3: "в цвете изменен, желтый",
      asw4: "в цвете не изменен",
    },
    {
      id: 6,
      name: "plaque",
      body: "Есть ли налет на зубах",
      asw1: "нет",
      asw2: "налет черного цвета в придесневой области",
      asw3: "налет черный на в сей поверхности зуба",
      asw4: "есть зубные камни",
    },
    {
      id: 7,
      name: "bleeding",
      body: "Есть ли кровоточивость при чистке зубов",
      asw1: "нет",
      asw2: "есть около одного зуба",
      asw3: "есть около 2-3х зубов",
      asw4: "есть в области всех зубов",
    },
    {
      id: 8,
      name: "condition",
      body: "Опишите состояние беспокоящего зуба",
      asw1: "зуб цел",
      asw2: "есть кариозные полости",
      asw3: "болит зуб наполовину разрушен",
      asw4: "зуб полностью разрушен/есть только корень",
    },
    {
      id: 9,
      name: "length",
      body: "Как давно зуб начал беспокоить",
      asw1: "день назад",
      asw2: "пару недель назад",
      asw3: "пару месяцев назад",
      asw4: "больше полугода назад",
    },
  ]);

  const [doctors, setDoctors] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("http://localhost:5000/api/doctors", { signal: abortCont.signal })
      .then((x) => x.json())
      .then((doctors) => setDoctors(doctors));
  }, []);

  return (
    <div id="home">
      <Nav />

      <form>
        <div className="upper">
          <label htmlFor="name" id="fioLabel">
            Ваше ФИО
          </label>
          <input type="text" id="fio" />
          <h3>Ваш Врач</h3>
          <div className="doctors-inputs">
            {doctors ? (
              doctors.map((doctor) => (
                <DoctorsInput doctorName={doctor.name} key={doctor._id} />
              ))
            ) : (
              <div className="loading">Loading...</div>
            )}
          </div>
        </div>

        <div className="form">
          <h2>Форма</h2>
          <ol className="form-inputs">
            {questions.map((question) => (
              <Question
                key={question.id}
                name={question.name}
                body={question.body}
                asw1={question.asw1}
                asw2={question.asw2}
                asw3={question.asw3}
                asw4={question.asw4}
              />
            ))}
          </ol>
        </div>
        <button>Отправить</button>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
