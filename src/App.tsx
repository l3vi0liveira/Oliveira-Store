import { Home } from "./components/Home/Home";

import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const user = {
    email: "levi@app.com",
    name: "Levi",
    password: "1234",
  };

  const login = () => {
    if (userEmail == user.email && userPassword == user.password) {
      setIsAuthenticate(true);
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
      {isAuthenticate && <Home user={user} />}
    </div>
  );
}

export default App;
