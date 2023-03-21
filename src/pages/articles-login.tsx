import styles from '../styles/articles-login.module.css'

import { Back } from '@/components/Back'
import { CardArticle } from '@/components/CardArticle'
import { Pagination } from '@/components/Pagination'
import { useEffect, useState } from 'react'
import { getRegistration } from './api/registration/get'
import { RegistrationForm } from '@/types/Registration'
import axios from 'axios'
import { IPagination } from '@/types/Pagination'

export default function ArticlesWithLogin() {
  const [objectCards, setObjectCards] = useState<RegistrationForm[]>([]);
  const [nextPage, setNextPage] = useState('')
  
  function seeMore () {
    axios.get<IPagination<RegistrationForm>>(`${nextPage}`)
      .then((res) => {
        if (res && res.data && res.data.results) {
          setObjectCards([...objectCards, ...res.data.results])
          setNextPage(res.data.next)
        }
        })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRegistration()
    .then((res) => {
      if (res && res.data && res.data.results) {
        setObjectCards(res.data.results)
        setNextPage(res.data.next)
      }
      })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return(
    <>
       <Back>        

          <div className={styles.center}>
                    
          <h1 className={styles.title}>Artigos</h1>
          
          {objectCards.length != 0 ? objectCards.map((card, index) => {
            return (
              <CardArticle 
                key={index} 
                nameArticle={card.nameArticle}
                nameStudentOne={card.nameStudentOne}
                nameAdvisorOne={card.nameAdvisorOne}
                nameStudentTwo={card.nameStudentTwo}
                nameAdvisorTwo={card.nameAdvisorTwo}
              />
            )
          })
        
          : 
          <>
          <CardArticle
            nameArticle='Fenótipo de coral: investigando as adaptações moleculares a mudanças ambientais' 
            nameStudentOne='John Park' 
            nameStudentTwo='Matthew Spot' 
            nameAdvisorOne='Chris Broksle' 
            nameAdvisorTwo='Andrew Michael' 
          />
          <CardArticle
            nameArticle='Genômica de coral: a busca por genes de resistência em corais ameaçados' 
            nameStudentOne='John Park' 
            nameAdvisorOne='Chris Broksle' 
          />
          </>
          }
          {nextPage && 
            <>  
              <div className={styles.buttonPagination}>
                <Pagination onClick={seeMore} />
              </div>
            </>
          }
        </div>
              
      </Back>
    </>
  )
}