const Question = ({ name, body, asw1, asw2, asw3, asw4 }) => {
  return (
    <li className="question">
      <p>{body}:</p>
      <div className="question-input">
        <input type="radio" name={name} value={asw1} />
        <label htmlFor={asw1}>{asw1}</label>
      </div>
      <div className="question-input">
        <input type="radio" name={name} value={asw2} />
        <label htmlFor={asw2}>{asw2}</label>
      </div>
      <div className="question-input">
        <input type="radio" name={name} value={asw3} />
        <label htmlFor={asw3}>{asw3}</label>
      </div>
      <div className="question-input">
        <input type="radio" name={name} value={asw4} />
        <label htmlFor={asw4}>{asw4}</label>
      </div>
    </li>
  );
};

export default Question;
