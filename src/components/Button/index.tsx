import styles from './button.module.css'

export function Button() {
  return(
    <>
     <input 
      type="submit" 
      value="Cadastrar"
      className={styles.button}
      />
    </>
  )
}