import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logo from "./../../assets/logo.svg";

import api from "./../../Services/Api";

function Case() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function createCase(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/app");
    } catch (error) {
      alert(error);
    }
  }

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

        <form onSubmit={createCase} className="case-form">
          <label htmlFor="title">
            <input
              placeholder="Titulo do caso"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="description">
            <textarea
              placeholder="Seu email"
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </label>

          <label htmlFor="value">
            <input
              placeholder="Valor em Reais "
              type="text"
              name="value"
              id="value"
              value={value}
              onChange={e => setValue(e.target.value)}
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
