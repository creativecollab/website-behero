import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "./../../Services/Api";

import heroImage from "./../../assets/heroes.png";
import logo from "./../../assets/logo.svg";

import "./styles.css";

function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { id });

      console.log(response.data.name);

      localStorage.setItem("ongName", response.data.name);
      localStorage.setItem("ongId", id);

      history.push("/app");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }

  return (
    <div className="login-container">
      <section className="login-wrapper">
        <img src={logo} alt="BeHero" />

        <form onSubmit={handleLogin} className="login-form ">
          <h1>Faça login</h1>

          <input
            type="text"
            placeholder="Sua ID"
            required
            name="id"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button type="submit" className="btn">
            Entrar
          </button>
        </form>

        <Link className="link" to="/registrar">
          <FiLogIn color="#E02041" size={16} />
          Não tenho Cadastro
        </Link>
      </section>

      <img src={heroImage} alt="Hero" />
    </div>
  );
}

export default Login;
