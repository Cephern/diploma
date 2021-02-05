const Doctor = ({ doctor }) => {
  return (
    <div className="doctor" key={doctor.id}>
      <p>Имя: {doctor.name}</p>
      <p>О себе: {doctor.desc}</p>
      <p>Лайки: {doctor.likes}</p>
    </div>
  );
};

export default Doctor;
