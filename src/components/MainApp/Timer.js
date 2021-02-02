import PropTypes from "prop-types";

const Timer = ({ minutes, seconds }) => {
  const renderTime = (number) => {
    let numString = "";
    if (number < 10) {
      numString = "0" + number.toString();
    } else {
      numString = number.toString();
    }
    return numString;
  };

  return (
    <div id="timer">
      {renderTime(minutes)}:{renderTime(seconds)}
    </div>
  );
};

Timer.defaultProps = {
  minutes: 25,
  seconds: 0,
};

Timer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Timer;
