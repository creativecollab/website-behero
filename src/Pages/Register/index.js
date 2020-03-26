import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

import logo from "./../../assets/logo.svg";

function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <section className="register-info">
          <img src={logo} alt="beHero" />

          <h1>Cadastrar</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG
          </p>

          <Link className="link" to="/">
            <FiArrowLeft color="#E02041" size={16} />
            Já tenho Cadastro
          </Link>
        </section>

        <form action="" className="register-form">
          <label htmlFor="name">
            <input
              placeholder="Nome da sua Ong"
              type="text"
              name="name"
              id="name"
            />
          </label>

          <label htmlFor="email">
            <input
              placeholder="Seu email"
              type="email"
              name="email"
              id="email"
            />
          </label>

          <label htmlFor="whatsapp">
            <input
              placeholder="Seu WhastApp"
              type="text"
              name="whatsapp"
              id="whatsapp"
            />
          </label>

          <div className="input-group">
            <input placeholder="Cidade" type="text" name="city" id="city" />

            <input
              style={{ width: 80 }}
              type="text"
              name="uf"
              id="uf"
              className="uf"
              placeholder="UF"
            />
          </div>

          <button className="btn" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
