import styles from "./Button.module.css"

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, disabled}) => {
    const buttonClass =
    type === "reset"
      ? `${styles.button} ${styles["button--reset"]}`
      : `${styles.button} ${styles["button--default"]}`;
  return (

        <button className={buttonClass}
        type={type}
        onClick={onClick}
        disabled={disabled}>
            {text}
        </button>

  )
}

export default Button