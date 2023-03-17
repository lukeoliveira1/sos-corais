import styles from './inputText.module.css'

interface InputTextProps {
  label: string;
  name: string;
  isRequired: boolean;
  value: string | ReadonlyArray<string> | number | undefined;
}

export function InputText({ label, name, isRequired, value } : InputTextProps) {
  return(
    <div className={styles.divInput}>
      <label htmlFor={name} className={styles.label}> {label} </label>
      <input 
        type="text" 
        name={name}
        required={isRequired}
        value={value}
        className={styles.input}
      />
    </div>
  )
}