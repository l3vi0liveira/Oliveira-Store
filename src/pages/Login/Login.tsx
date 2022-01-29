import { useState } from "react";

import { useHistory } from "react-router-dom";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const user = {
    email: "levi@app.com",
    name: "Levi",
    password: "1234",
  };

  const history = useHistory();

  const login = () => {
    if (userEmail == user.email && userPassword == user.password) {
      history.push("/home");
      return;
    }
    alert("Usuário e/ou senha incorreto");
    return;
  };

  const handleUserEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handleUserPassword = (event) => {
    setUserPassword(event.target.value);
  };
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <AppRoutes /> */}

      <h2>Faça o login para poder continuar:</h2>
      <br />
      <p>
        Email:
        <input
          type="email"
          onChange={handleUserEmail}
          value={userEmail}
          placeholder="Email"
        />
      </p>
      <br />
      <p>
        Senha:
        <input
          type="password"
          onChange={handleUserPassword}
          value={userPassword}
          placeholder="Senha"
        />
      </p>
      <button onClick={login}>Login</button>
    </div>
  );
};
