import Image from 'next/image'

import styles from '../styles/info.module.css'

import imageAside1 from 'public/img/image-readmore-1.png'
import imageAside2 from 'public/img/image-readmore-2.png'

import { Back } from '@/components/Back'

export default function Home() {
  
  return (
    <Back>        

      <div className={styles.center}>
      
        <h1>Sobre o Evento</h1>
        
        <p>O SOS Corais reunirá cientistas e especialistas renomados em ecologia marinha e para  as mais recentes descobertas sobre o branqueamento dos corais e as possíveis  para enfrentar essa ameaça crescente.</p>
        
        <p>Entre os tópicos abordados estarão as causas e os efeitos do branqueamento dos corais, a   corais para os ecossistemas marinhos, as estratégias de conservação para  os recifes de  e as implicações econômicas e sociais do declínio dos recifes de  em todo o mundo.</p>
        
        <p>O evento também incluirá sessões de debates e mesas redondas, permitindo que os   experiências e ideias para colaborar no desenvolvimento de  mais eficazes para  este desafio crescente. Além disso, os participantes a oportunidade de participar de  interativos para discutir temas específicos  ao branqueamento dos corais.</p>
        
        <p>Será uma excelente oportunidade para cientistas, especialistas e interessados em geral,   mais sobre o branqueamento dos corais, trocar informações e desenvolver  para  esse desafio crucial para a conservação dos oceanos e a do planeta.</p>
        
      </div>

      <div className={styles.aside}>
      
        <Image src={imageAside1} alt="corais e peixes no fundo do mar" className={styles.img1} height={330} width={250}/>
        
        <Image src={imageAside2} alt="corais e peixes no fundo do mar" height={330} width={250}/>
      
      </div>
                    
    </Back>
  )
}
