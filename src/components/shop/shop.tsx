import { useEffect } from "react";

import styles from "./shop.module.css";

import Navbar from "../navbar/navbar";

export default function Shop() {
  useEffect(() => {
    document.title = "Carrinho";
  });

  return (
    <div className="shop">
      <div className="wrapper">
        <Navbar />
      </div>

      <div className={styles.shopping}>
        <h1>CARRINHO</h1>
      </div>
    </div>
  );
}
