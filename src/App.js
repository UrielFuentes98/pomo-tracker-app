// import Timer from "./components/Timer";
import Login from './components/Login'
import Register from './components/Register'
import Stats from './components/Stats'
import MainSection from './components/MainSection'

import { useState, useEffect } from 'react'

function App() {
  const [userState, setUserState] = useState('login')
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);

  var rightPanel;

  switch(userState) {
    case 'login': 
      rightPanel = <Login />
      break;
    case 'register':
      rightPanel = <Register />
      break;
    case 'stats':
      rightPanel = <Stats />
      break;
    default:
      rightPanel = <Login />
  }

  return (
    <div id="app">
      <MainSection minutes={timerMinutes} seconds={timerSeconds}/>
      {rightPanel}
    </div>
  );
}

export default App;
