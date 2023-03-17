import Image from 'next/image'

import Link from 'next/link'

import logo from 'public/img/logo.png'

import styles from '../styles/index.module.css'

import imageMain from 'public/img/image-main-1.png'

import imageAside from 'public/img/image-main-2.png'

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
            
            <p>Branquemento dos Corais</p>
            
            <h1>Estratégias para <br/> restaurar os recifes</h1>
            
            <Image src={imageMain} alt="corais e peixes no fundo do mar" height={350} width={650}/>
        
          </div>
        
          <div className={styles.aside}>
          
            <p>
              O evento reunirá cientistas e especialistas renomados em ecologia marinha e conservação ara presentar as mais recentes descobertas sobre o branqueamento dos corais e discutir as possíveis soluções para enfrentar essa ameaça crescente.
            </p>

            <Link href='./info'>
              <b> Ler Mais </b> 
            </Link>

            <Image src={imageAside} alt="corais e peixes no fundo do mar" height={325} width={250}/>
          
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
