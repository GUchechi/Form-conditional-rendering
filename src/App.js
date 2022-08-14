import './App.css';
import Form from './Components/Form';
// import Login from './Components/Login';

// const isLoggedIn = false;

const isUserRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {
        !isLoggedIn === true ? <Login /> : <h1>Hello</h1>
      } */}

      <Form
      isRegistered= {isUserRegistered}
       />
    </div>
  );
}

export default App;
