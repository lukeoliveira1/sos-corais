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
    <div className={styles.divCardArticle}>

      <h2>{nameArticle}</h2>

      <p>{nameStudentOne}</p>

      {nameStudentTwo && 
        <p>{nameStudentTwo}</p>
      }

      <p>{nameAdvisorOne}</p>

      {nameAdvisorTwo &&
        <p>{nameAdvisorTwo}</p>
      }
    
    </div>

    <section className={styles.lineCardArticle}></section>
    </>
  )
}