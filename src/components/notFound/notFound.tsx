import { useEffect } from "react";

import { useNavigate } from "react-router";

import styles from "./notFound.module.css";

import Navbar from "../navbar/navbar";

export default function SPA() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");

    document.title = "Página Não Encontrada";
  });

  return (
    <div>
      <div className="wrapper">
        <Navbar />
      </div>

      <div className={styles.notFound}></div>
      <h1>não encontrada</h1>
    </div>
  );
}
