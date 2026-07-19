import styles from "./navbar.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { BiDumbbell } from "react-icons/bi";

import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to={"/"}>
          <h1 className={styles.brandImage}>LOGO</h1>
        </Link>
      </div>

      <div className={styles.navbarActions}>
        <div className={styles.navbarActionsFullProducts}>
          <Link to={"/produtos"} className={styles.navbarActionsProducts}>
            {" "}
            <BiDumbbell size={30} className={styles.dumbellIcon} /> Produtos
          </Link>
        </div>

        <div className={styles.navbarActionsInputSearch}>
          <input type="search" placeholder="Pesquisar produtos..." />
          <button className={styles.navbarActionSearchBar}>
            <AiOutlineSearch size={31} />
          </button>
        </div>

        <div className={styles.navbarActionsShoppingCart}>
          <Link to={"/carrinho"} className={styles.navbarActionShopping}>
            <AiOutlineShoppingCart size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
