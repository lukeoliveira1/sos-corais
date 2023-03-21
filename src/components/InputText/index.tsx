import { HTMLInputTypeAttribute } from 'react';
import styles from './inputText.module.css'

interface InputTextProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  isRequired: boolean;
  value: string | ReadonlyArray<string> | number | undefined;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText({ label, type, name, isRequired, value, onChange, placeholder }: InputTextProps) {
  return (
    <div className={styles.divInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={isRequired}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}