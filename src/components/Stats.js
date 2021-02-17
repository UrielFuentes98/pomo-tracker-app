import React from "react";

const renderTime = (number) => {
  let numString = "";
  if (number < 10) {
    numString = "0" + number.toString();
  } else {
    numString = number.toString();
  }
  return numString;
};

const renderHours = (number) => {
  let hourString = "";
  if (number > 0) {
    hourString = number.toString() + ":";
  }
  return hourString;
};

const Stats = ({ stats }) => {
  return (
    <dvi>
      <h2 className="mb-5">Stats</h2>
      <h4>Today.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoToday}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {renderHours(Math.floor(stats.secToday / 3600))}
          {renderTime(Math.floor((stats.secToday / 60) % 60 ))}:
          {renderTime(Math.floor(stats.secToday % 60))}
        </span>
      </div>
      <h4 className="mt-3">This week.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoWeek}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {renderHours(Math.floor(stats.secWeek / 3600))}
          {renderTime(Math.floor((stats.secWeek / 60) % 60 ))}:
          {renderTime(Math.floor(stats.secWeek % 60))}
        </span>
      </div>
      <h4 className="mt-3">This month.</h4>
      <div>
        <span className="font-weight-bold">Pomodoros: </span>
        <span>{stats.pomoMonth}</span>
      </div>
      <div>
        <span className="font-weight-bold">Time: </span>
        <span>
          {renderHours(Math.floor(stats.secMonth / 3600))}
          {renderTime(Math.floor((stats.secMonth / 60) % 60 ))}:
          {renderTime(Math.floor(stats.secMonth % 60))}
        </span>
      </div>
    </dvi>
  );
};

export default Stats;
