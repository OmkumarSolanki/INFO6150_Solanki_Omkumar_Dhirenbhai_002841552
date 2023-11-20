import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email);
    // console.log(password);
    try {
      const requestBody = {
        emailId: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3000/user/login",
        requestBody
      );

      if (response.statusText === "OK") {
        // console.log(response);
        console.log(response.data.message);
        if (response.data.message === "Log In Successful") {
          console.log("Log In Successful");
          navigate("/home");
        } else if (response.data.message === "Email Id Not Registered") {
          setErrorMessage("Email Id Not Registered");
        } else if (response.data.message === "Incorrect Password") {
          setErrorMessage("Incorrect Password");
        }
        console.log("SuccessFull");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <section className="vh-100" style={{ display: "flex" }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-4">
            <img
              src={Logo}
              className="img-fluid neuLogo"
              alt="Northeastern Logo"
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <Form.Control
                  type="email"
                  id="emailAdd"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setEmail(e.target.value);
                  }}
                />

                <Form.Label className="form-label" htmlFor="emailAdd">
                  Email address
                </Form.Label>
              </div>
              <div className="form-outline mb-3">
                <Form.Control
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setPassword(e.target.value);
                  }}
                />
                <Form.Label className="form-label" htmlFor="password">
                  Password
                </Form.Label>
              </div>
              {/* ERROR message */}
              {errorMessage ? (
                <div style={{ color: "red" }}>{errorMessage}</div>
              ) : null}
              <div className="text-center text-lg-start mt-4 pt-2">
                <Button variant="primary" type="submit" id="LoginButton">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
