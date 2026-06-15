import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Container from "../Container/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <main className={css.main__bg}>
      <Container>
        <div className={css.home__wraper}>
          <h1 className={css.hoem__title}>Campers of your dreams</h1>
          <p className={css.home__desc}>
            You can find everything you want in our catalog
          </p>
          <Button text="View Now" onClick={handleClick} />
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
