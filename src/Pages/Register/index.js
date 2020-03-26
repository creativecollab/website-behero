import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

import api from "./../../Services/Api";

import logo from "./../../assets/logo.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();
  async function handleRegister(e) {
    e.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    try {
      // eslint-disable-next-line
      const response = await api.post("/ongs", data);

      history.push("/");
    } catch (error) {
      alert("Erro Ao Cadastar");
    }
  }

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

        <form onSubmit={handleRegister} className="register-form">
          <label htmlFor="name">
            <input
              placeholder="Nome da sua Ong"
              required
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            <input
              placeholder="Seu email"
              required
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="whatsapp">
            <inputw
              placeholder="Seu WhastApp"
              required
              type="text"
              name="whatsapp"
              id="whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </label>

          <div className="input-group">
            <input
              placeholder="Cidade"
              required
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              style={{ width: 80 }}
              required
              type="text"
              name="uf"
              id="uf"
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
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
