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
              
              <Image src={logo} alt="logo do sos corais" className={styles.logoSos}/>
              
              <div className={styles.footerGithub}>
                <a href="https://github.com/lukeoliveira1">@lukeoliveira1</a>
                <Image src={logoGithub} alt="logo do github" className={styles.logoGithub}/>
              </div>
            
            </div>
        
        </footer>
    </>
  )
}