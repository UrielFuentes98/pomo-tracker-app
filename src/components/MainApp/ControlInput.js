function ControlInput({
  changeMode,
  radioName,
  inputName,
  inputValue,
  setInputValue,
  inputChecked,
  invalidInput,
  setInvalidInput,
}) {
  //Determine if input is valid when input is active.
  const validAndSaveInput = (e) => {
    if (inputChecked) {
      let inputNumber = Number(e.target.value);
      if (isNaN(inputNumber)) {
        setInvalidInput(true);
        //Check if in range and number is integer
      } else if (inputNumber > 0 && inputNumber < 60) {
        if (Number.isInteger(inputNumber)) {
          setInvalidInput(false);
        } else {
          setInvalidInput(true);
        }
      } else {
        setInvalidInput(true);
      }
      setInputValue(e.target.value);
    }
  };

  return (
    <div>
      <span style={{ width: "110px", display: "inline-block" }}>
        <input
          type="radio"
          className="mr-1"
          id={radioName}
          name="session-type"
          value={radioName}
          onClick={() => changeMode(radioName)}
          checked={inputChecked}
        ></input>
        <label className="input-label">{inputName}</label>
      </span>
      <input
        className="input-field"
        type="text"
        value={inputValue}
        onChange={(e) => validAndSaveInput(e)}
        size="5"
      />
      <span> min</span>
      {invalidInput ? <span>Invalid Input</span> : null}
    </div>
  );
}

export default ControlInput;
