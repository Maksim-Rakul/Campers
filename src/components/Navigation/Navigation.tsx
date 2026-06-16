import { Link } from "react-router-dom";
import Container from "../Container/Container";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Container>
      <nav className={css.nav}>
        <Link to="/">
          <img src="/icons/Logo.svg" alt="logo" />
        </Link>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <Link className={css.navListLink} to="/">
              Home
            </Link>
          </li>
          <li className={css.navListItem}>
            <Link className={css.navListLink} to="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
