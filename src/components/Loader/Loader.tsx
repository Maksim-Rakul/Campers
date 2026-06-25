// components/States/LoadingState.jsx
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loadingContainer}>
      <div className={css.spinnerWrapper}>
        <div className={css.spinner}></div>
        <div className={css.spinnerRing}></div>
      </div>
      <p className={css.loadingText}>Loading, please wait...</p>
    </div>
  );
};

export default Loader;
