import './App.css';
import Login from './Components/Login';

const isLoggedIn = false;

const renderConditionally = () => {
  if(!isLoggedIn) {
    return <Login />
  } else{
    return (
      <h1>Hello</h1>
    )
  }
}

function App() {
  return (
    <div className="container">
        {renderConditionally()}
    </div>
  );
}

export default App;
