import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing"> Pricing </NavLink>
        </li>
        <li>
          <NavLink to="/travel"> Products </NavLink>
        </li>

        <li>
          <button>
            <NavLink className={styles.ctaLink} to="/login">
              Login
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
