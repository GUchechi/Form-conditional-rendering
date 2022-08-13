import './App.css';
import Login from './Components/Login';

const isLoggedIn = false;

const renderConditionally = () => {
  if(!isLoggedIn) {
    return (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
      </form>
    )
  } else{
    return (
      <h1>Hello</h1>
    )
  }
}

function App() {
  return (
    <div className="container">
        <Login />
    </div>
  );
}

export default App;
