import { useEffect } from "react";

import styles from "./products.module.css";

import Navbar from "../navbar/navbar";

export default function Products() {
  useEffect(() => {
    document.title = "Produtos";
  });
  return (
    <div className="products">
      <div className="wrapper">
        <Navbar />
      </div>

      <div className={styles.prod}>
        <h1>PRODUTOS</h1>
      </div>
    </div>
  );
}
