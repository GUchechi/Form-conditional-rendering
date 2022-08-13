import './App.css';
import Login from './Components/Login';

const isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {
        !isLoggedIn === true ? <Login /> : <h1>Hello</h1>
      }
    </div>
  );
}

export default App;
