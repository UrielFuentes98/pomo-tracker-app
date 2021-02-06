function ControlInput({
  changeMode,
  radioName,
  inputName,
  inputValue,
  setInputValue,
  inputChecked,
}) {
  return (
    <div className="control-input">
      <input
        type="radio"
        id={radioName}
        name="session-type"
        value={radioName}
        onClick={() => changeMode(radioName)}
        checked={inputChecked}
      ></input>
      <label className="input-label">{inputName}</label>
      <input
        className="input-field"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        size="5"
      />
      <span> min</span>
    </div>
  );
}

export default ControlInput;
