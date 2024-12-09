import styles from "./FormInput.module.css";

interface FormInputProps {
  placeholder: string;
  value: string;
  label: string;
  type: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  label,
  type,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <label className={styles.labelLine}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
