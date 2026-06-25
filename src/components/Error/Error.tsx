import css from "./Error.module.css";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className={css.error}>
      <div className={css.errorIcon}>⚠️</div>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
