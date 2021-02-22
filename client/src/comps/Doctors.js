import { useState, useEffect } from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("https://nano-doc.herokuapp.com/api/doctors", {
      signal: abortCont.signal,
    })
      .then((x) => x.json())
      .then((doctors) => setDoctors(doctors));
  }, []);

  return (
    <div id="doctors">
      <Nav />

      <h2 className="title">Наши Врачи</h2>

      <div className="doctors">
        {doctors ? (
          doctors.map((doctor) => <Doctor doctor={doctor} key={doctor._id} />)
        ) : (
          <div className="loading">Загружаем...</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
