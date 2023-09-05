import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigatetoUrl = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://127.0.0.1:8000/api/user/login", request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result == "1") {
            navigatetoUrl("/home");
            console.log("login OK -> " + result);
          } else {
            navigatetoUrl("/nouser");
            console.log("No valid login -> " + result);
          }
        },
        (error) => {
          setError(error);
          console.log(error);
        }
      );
  };

  return (
    <main className="w-full h-screen bg-blue-200 flex justify-center items-center">
      <div>
        <h1 className="w-full text-3xl text-center font-bold pt-10">
          Ingrese credenciales
        </h1>
        <form className="w-full text-3xl pt-10" onSubmit={handleSubmit}>
          <div>
            <label className=" pl-14" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            className="mt-10 bg-blue-900 text-white w-[300px] h-[64px] ml-[15%]"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;
