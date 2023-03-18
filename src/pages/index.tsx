import Image from 'next/image'

import Link from 'next/link'

import styles from '../styles/index.module.css'

import imageMain from 'public/img/image-main-1.jpg'

import imageAside from 'public/img/image-main-2.png'

import { Back } from '@/components/Back'

export default function Home() {
  
  return (
    <Back>
    
      <div className={styles.center}>
      
        <p>Branquemento dos Corais</p>
        
        <h1>Estratégias para <br/> restaurar os recifes</h1>
        
        <Image src={imageMain} alt="corais e peixes no fundo do mar" height={350} width={600} />
        
      </div>
      
      <div className={styles.aside}>
      
        <p>
        O evento reunirá cientistas e especialistas renomados em ecologia marinha e conservação ara  as  recentes descobertas sobre o branqueamento dos corais e discutir as  soluções para  essa ameaça crescente.
        </p>
        
        <Link href='./info'>
          <b> Ler Mais </b> 
        </Link>
        
        <Image src={imageAside} alt="corais e peixes no fundo do mar"/>
        
      </div>
    
    </Back>
  )
}
