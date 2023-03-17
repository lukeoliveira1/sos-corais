import Image from 'next/image'

import Link from 'next/link'

import logo from 'public/img/logo.png'

import styles from '../styles/info.module.css'

import imageAside1 from 'public/img/image-readmore-1.png'

import imageAside2 from 'public/img/image-readmore-2.png'

import logoGithub from 'public/img/logo-github.png'

export default function Home() {
  
  return (
    <>
      <section className={styles.sectionHeader}></section>

      <div className={styles.divBack}> 
        
        <header className={styles.header}>
          
          <Image src={logo} alt="logo do sos corais"/>
          
          <div className={styles.menu}>
            
            <Link href='./' className='linkHeader'> 
              Home 
            </Link>
            <Link href='./registration'>
              Inscrição
            </Link>
            <Link href='./articles'>
              Artigos 
            </Link>
          
          </div> 
        
        </header>
        
        <section className={styles.lineHeader1}></section>
        
        <main className={styles.main}>
          
          <div className={styles.center}>
            
            <h1>Sobre o Evento</h1>
            
            <p>O SOS Corais reunirá cientistas e especialistas renomados em ecologia marinha e conservação para apresentar as mais recentes descobertas sobre o branqueamento dos corais e discutir as possíveis soluções para enfrentar essa ameaça crescente.</p>

            <p>Entre os tópicos abordados estarão as causas e os efeitos do branqueamento dos corais, a importância dos corais para os ecossistemas marinhos, as estratégias de conservação para proteger os recifes de coral e as implicações econômicas e sociais do declínio dos recifes de coral em todo o mundo.</p>

            <p>O evento também incluirá sessões de debates e mesas redondas, permitindo que os participantes compartilhem experiências e ideias para colaborar no desenvolvimento de estratégias mais eficazes para enfrentar este desafio crescente. Além disso, os participantes terão a oportunidade de participar de workshops interativos para discutir temas específicos relacionados ao branqueamento dos corais.</p>

            <p>Será uma excelente oportunidade para cientistas, especialistas e interessados em geral, para aprender mais sobre o branqueamento dos corais, trocar informações e desenvolver estratégias para enfrentar esse desafio crucial para a conservação dos oceanos e a sustentabilidade do planeta.</p>
        
          </div>
        
          <div className={styles.aside}>
          
            <Image src={imageAside1} alt="corais e peixes no fundo do mar" className={styles.img1} height={330} width={250}/>
            
            <Image src={imageAside2} alt="corais e peixes no fundo do mar" height={330} width={250}/>
          
          </div>
        
        </main>

        <section className={styles.lineHeader2}></section>
        
        <footer>
            
            <div className={styles.footer}>
              
              <Image src={logo} alt="logo do sos corais" height={40} width={100}/>
              
              <div className={styles.footerGithub}>
                <a href="https://github.com/lukeoliveira1">@lukeoliveira1</a>
                <Image src={logoGithub} alt="logo do github" height={32} width={32}/>
              </div>
            
            </div>
        
        </footer>
    
      </div>

      <section className={styles.sectionFooter}></section>
    </>
  )
}
