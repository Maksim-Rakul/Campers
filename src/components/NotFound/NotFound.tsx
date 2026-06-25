import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <div className={css.notFoundIcon}>🔍</div>
      <h3>Not found</h3>
    </div>
  );
};

export default NotFound;
