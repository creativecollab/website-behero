import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import heroImage from "./../../assets/heroes.png";
import logo from "./../../assets/logo.svg";

function Login() {
  return (
    <div className="login-container">
      <section className="login-wrapper">
        <img src={logo} alt="BeHero" />

        <form className="login-form ">
          <h1>Faça login</h1>

          <input type="text" placeholder="Sua ID" />

          <button className="btn">Entrar</button>
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
