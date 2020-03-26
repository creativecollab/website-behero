import React from "react";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "./../../assets/logo.svg";

function Case() {
  return (
    <div className="case-container">
      <div className="case-wrapper">
        <section className="case-info">
          <img src={logo} alt="beHero" />

          <h1>Cadastrar Novo Caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso!
          </p>

          <Link className="link" to="/app">
            <FiArrowLeft color="#E02041" size={16} />
            Voltar para Home
          </Link>
        </section>

        <form action="" className="case-form">
          <label htmlFor="title">
            <input
              placeholder="Titulo do caso"
              type="text"
              name="title"
              id="title"
            />
          </label>

          <label htmlFor="description">
            <textarea
              placeholder="Seu email"
              type="email"
              name="email"
              id="email"
            ></textarea>
          </label>

          <label htmlFor="value">
            <input
              placeholder="Valor em Reais "
              type="text"
              name="value"
              id="value"
            />
          </label>

          <button className="btn" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Case;
