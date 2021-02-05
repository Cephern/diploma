const DoctorsInput = ({ doctorName }) => {
  return (
    <div className="doctors-input">
      <input type="radio" name="doctor" value={doctorName} />
      <label htmlFor={doctorName}>{doctorName}</label>
    </div>
  );
};

export default DoctorsInput;
