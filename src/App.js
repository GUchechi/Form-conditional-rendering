import './App.css';

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
        {
          renderConditionally()
        }
    </div>
  );
}

export default App;
