import styles from "./Products.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Travel() {
  return (
    <div className={styles.page}>
      <div className={styles.sideBar}>
        <div className={styles.navDiv}>
          <NavLink to="cities" className={styles.buttonNav}>
            Cities
          </NavLink>
          <NavLink to="countries" className={styles.buttonNav}>
            Countries
          </NavLink>
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
      <div className="map">Hi</div>
    </div>
  );
}

export default Travel;
