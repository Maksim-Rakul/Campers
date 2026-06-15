import css from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
