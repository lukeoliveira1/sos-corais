import styles from './cardArticle.module.css'

interface CardArticleProps {
  nameArticle: string;
  nameStudentOne: string;
  nameStudentTwo?: string;
  nameAdvisorOne: string;
  nameAdvisorTwo?: string;
}

export function CardArticle({ nameArticle, nameStudentOne, nameStudentTwo, nameAdvisorOne, nameAdvisorTwo} : CardArticleProps) {
  return(
    <>
    <section className={styles.lineCardArticle}></section>
    
    <div className={styles.divCardArticle}>

      <h2>{nameArticle}</h2>

      <p>Aluno(a): {nameStudentOne}</p>

      {nameStudentTwo && 
        <p>Aluno(a): {nameStudentTwo}</p>
      }

      <p>Orientador(a): {nameAdvisorOne}</p>

      {nameAdvisorTwo &&
        <p>Orientador(a): {nameAdvisorTwo}</p>
      }
    
    </div>

    </>
  )
}