import Image from 'next/image'

import Link from 'next/link'

import logo from 'public/img/logo.png'

import styles from './header.module.css'

export function Header() {
  return(
    <>
      <header className={styles.header}>
          
          <Image src={logo} alt="logo do sos corais" className={styles.logoSos}/>
          
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
    </>
  )
}