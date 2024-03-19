import './componentets/header/header'
import './componentets/main/FirstCom'
import './componentets/main/SecondC'
import FirstComponent from './componentets/main/FirstCom';
import SecondComponent from './componentets/main/SecondC';
import HeaderF from './componentets/header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderF />
       <FirstComponent />
        <SecondComponent />
    </div>
  );
}

export default App;
