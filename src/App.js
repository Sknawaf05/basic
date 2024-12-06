import './App.css';
import Btn from './component/Btn';
import Profile from './component/Profile';

function App() {


  return (
    <div className="App">
      <h1>Basic App</h1>
      <Profile name="Nawaf" location="mumbra" />
      {/* <Btn name="Sign Up" /> */}
    </div>
  );
}

export default App;


