import { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createUser } from "../../redux/user/slice";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (name.trim().length < 3) return alert("preencha um nome válido");
    if (name === "" || email === "") return alert("Digite os dados do user");

    dispatch(createUser({ name, email }));
    setName("");
    setEmail("");
    navigate("/painel");
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link to="/painel">
          <h1 className={styles.title}>Dev Login</h1>
        </Link>

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome...."
          />
          <input
            type="text"
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email..."
          />

          <button type="submit">Acessar</button>
        </form>
      </main>
    </div>
  );
}
