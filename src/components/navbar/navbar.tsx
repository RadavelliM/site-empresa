import styles from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <h1 className={styles.brandImage}>LOGO</h1>
      </div>

      <div className={styles.navbarActions}>
        <div className={styles.navbarActionsInputSearch}>
          <input type="search" placeholder="Pesquisar produtos..." />
          <button className={styles.navbarActionSearchBar}>
            <AiOutlineSearch size={25} />
          </button>
        </div>

        <div className={styles.navbarActionsShoppingCart}>
          <button className={styles.navbarActionShopping}>
            <AiOutlineShoppingCart size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}
