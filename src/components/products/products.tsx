import { useEffect } from "react";

import styles from "./products.module.css";

import Navbar from "../navbar/navbar";
import NumberCall from "../../ui/calls/callToActionNumber/callToActionNumber";
import Filter from "../../ui/filter/filter";

export default function Products() {
  useEffect(() => {
    document.title = "Produtos";
  });
  return (
    <div className="products">
      <NumberCall />
      <div className="wrapper">
        <Navbar />
        <Filter />
      </div>

      <div className={styles.prod}>
        <h1>PRODUTOS</h1>
      </div>
    </div>
  );
}
