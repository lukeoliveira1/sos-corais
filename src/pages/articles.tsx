import Image from 'next/image'

import styles from '../styles/articles.module.css'

import imageArticle from 'public/img/image-articles.png'

import { Back } from '@/components/Back'
import { CardArticle } from '@/components/CardArticle'
import { Pagination } from '@/components/Pagination'

export default function Articles() {
  return(
    <>
       <Back>        

          <div className={styles.center}>
                    
          <h1 className={styles.title}>Artigos</h1>
          
          <section className={styles.lineArticleH1}></section>

          <CardArticle
            nameArticle='Ecologia de corais: a relação entre a diversidade e a resiliência de recifes de coral' 
            nameStudentOne='John Park' 
            nameAdvisorOne='Chris Broksle' 
          />
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
          
          <Pagination />
        </div>
        
        <div className={styles.aside}>
        
          <p>
          O branqueamento dos corais é causado por uma série de fatores, como a elevação da temperatura da água do mar, a poluição, a acidificação dos oceanos e eventos climáticos extremos. Esses fatores podem afetar a relação simbiótica entre os corais e as algas, levando à expulsão das algas pelos corais. O branqueamento pode levar à morte dos corais, o que pode ter consequências devastadoras para os ecossistemas marinhos e para as comunidades que dependem dos recursos marinhos para sua subsistência. Por isso, é importante promover ações de conservação dos recifes de coral e reduzir as emissões de gases de efeito estufa que contribuem para o aquecimento global e a acidificação dos oceanos.
          </p>
    
          
          <Image src={imageArticle} alt="corais e peixes no fundo do mar" height={250} width={250}/>
          
        </div>
              
      </Back>
    </>
  )
}