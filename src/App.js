import { useState } from "react";
import Login from './components/Login'
import Register from './components/Register'
import Stats from './components/Stats'
import MainSection from './components/MainSection'

function App() {
  const [userState, setUserState] = useState('login')


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
      <MainSection />
      {rightPanel}
    </div>
  );
}

export default App;
