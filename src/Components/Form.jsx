import React from "react";

function Form({isRegistered}) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
        {!isRegistered ? <input type="password" placeholder="Confirm Password" /> : null}

      <button type="submit">
        {
            !isRegistered ? "Register" : "Login"
        }
      </button>
    </form>
  );
}

export default Form;
