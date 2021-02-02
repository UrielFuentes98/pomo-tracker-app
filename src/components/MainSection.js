import Timer from "./MainApp/Timer";
import ControlButtons from "./MainApp/ControlButtons";
import ControlInput from "./MainApp/ControlInput";

function MianApp({ minutes, seconds }) {
  return (
    <div id="main-section">
      <Timer minutes={minutes} seconds={seconds} />
      <ControlButtons />
      <div id="input-elements">
        <ControlInput
          radioName="pomodoro"
          inputName="Pomodoro"
          inputValue={25}
        />
        <ControlInput radioName="break" inputName="Break" inputValue={5} />
        <ControlInput
          radioName="long-break"
          inputName="Long Break"
          inputValue={15}
        />
      </div>
    </div>
  );
}

export default MianApp;
