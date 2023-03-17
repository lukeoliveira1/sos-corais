import styles from './pagination.module.css'

export function Pagination() {
  return(
    <ul className={styles.pagination}>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
    </ul>
  )
}