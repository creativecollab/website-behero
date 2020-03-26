import React, { useState, useEffect } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logo from "./../../assets/logo.svg";

import "./styles.css";

import api from "./../../Services/Api";

export default function Dashboard() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  async function loadCases() {
    const cases = await api.get("/incidents", {
      headers: {
        Authorization: ongId
      }
    });

    const data = cases.data;

    setIncidents(data);
  }

  useEffect(() => {
    loadCases();
  }, [loadCases()]);

  async function deleteCases(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      console.log("Not Access our Delete");
    }
  }

  function logout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <div className="dash-container">
      <header className="dash-header">
        <img src={logo} alt="behero" />
        <span>Bem Vindo {ongName}</span>
        <div className="buttons">
          <Link className="btn" to="/case/novo">
            Cadastrar Novo Caso
          </Link>

          <button onClick={logout}>
            <FiPower size={16} color="#e02041" />
          </button>
        </div>
      </header>

      <section className="dash-wrapper">
        <h1>Casos Cadastrados</h1>

        <ul className="card">
          {incidents.map(incident => (
            <li key={incident.id} className="card-item">
              <strong>Caso</strong>
              <p>{incident.title}</p>

              <strong>Descrição</strong>
              <p>{incident.description}</p>

              <strong>Valor</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </p>

              <button onClick={() => deleteCases(incident.id)}>
                <FiTrash2 color="#a8a8b3" size={20} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
