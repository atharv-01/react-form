import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      password: "123456",
    };

    if (passwordInput == hardcodedCred.password) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "12345678";
      sessionStorage.setItem("auth-token", token);

      navigate("/Details");
    } else {
      //bad combination
      alert("Wrong Password");
    }
  };

  return (
    <div>
      <div className="loginPage">
        <h2 className="login">Log In</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              autoComplete="new-password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
