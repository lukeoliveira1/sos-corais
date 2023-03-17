import Image from 'next/image'

import logo from 'public/img/logo.png'

import logoGithub from 'public/img/logo-github.png'

import styles from './footer.module.css'

export function Footer() {
  return(
    <>
      <section className={styles.lineFooter}></section>
        
        <footer className={styles.divFooter}>
            
            <div className={styles.footer}>
              
              <Image src={logo} alt="logo do sos corais" height={40} width={100}/>
              
              <div className={styles.footerGithub}>
                <a href="https://github.com/lukeoliveira1">@lukeoliveira1</a>
                <Image src={logoGithub} alt="logo do github" height={32} width={32}/>
              </div>
            
            </div>
        
        </footer>
    </>
  )
}