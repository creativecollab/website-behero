import React from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.svg";

import "./styles.css";

export default function Dashboard() {
  return (
    <div className="dash-container">
      <header className="dash-header">
        <img src={logo} alt="behero" />
        <span>Bem Vindo APAD</span>
        <Link className="btn" to="/case/novo">
          Cadastrar Novo Caso
        </Link>

        <button>
          <FiPower size={16} color="#e02041" />
        </button>
      </header>

      <section className="dash-wrapper">
        <h1>Casos Cadastrados</h1>

        <ul className="card">
          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>

          <li className="card-item">
            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <strong>Caso 1</strong>
            <p>Caso Test</p>

            <button>
              <FiTrash2 color="#a8a8b3" size={20} />
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
