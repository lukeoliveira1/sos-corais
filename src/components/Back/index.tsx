import { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './back.module.css'

interface BackProps {
  children: ReactNode;
}

export function Back({ children } : BackProps){
  return(
    <>
      <section className={styles.sectionHeader}></section>

        <div className={styles.divBack}>

          <Header />

          <main className={styles.main}>

            {children}

          </main>

          <Footer />
        
        </div>

      <section className={styles.sectionFooter}></section>
    </>
  )
}