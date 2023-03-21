import styles from './pagination.module.css'

interface PaginationOptions {
  onClick: () => void;
}

export function Pagination({ onClick } : PaginationOptions) {
  return(
    <button 
      onClick={onClick}>
        Ver mais
    </button>
  )
}