import Image from 'next/image'

import styles from '../styles/registration.module.css'

import imageRegistration1 from 'public/img/image-registration-1.png'
import imageRegistration2 from 'public/img/image-registration-2.png'


import { Back } from '@/components/Back';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';


export default function Registration() {

  return(
    <>
     <Back>
      
      <div className={styles.center}>
        
        <h1>Inscrição</h1>
        
        <form action="" className={styles.form}>

          <div className={styles.formLeft}>

            <InputText 
              label='Nome Estudante 1:'
              name='nameStudentFirst'
              isRequired={true}
              value=''
              />
            
            <InputText 
              label='Nome Estudante 2:'
              name='nameStudentSeconde'
              isRequired={false}
              value=''
            />

            <InputText 
              label='Nome do artigo:'
              name='articleName'
              isRequired={true}
              value=''
              />
            
            <label htmlFor=""></label>
            <input type='file' name='article' className={styles.sendFile}/>
            
          </div>

          <div className={styles.formRight}>

            <InputText 
              label='Escola:'
              name='schoolName'
              isRequired={true}
              value=''
              />
            
            <InputText 
              label='Orientador 1:'
              name='advisorOne'
              isRequired={true}
              value=''
            />

            <InputText 
              label='Orientador 2:'
              name='advisorTwo'
              isRequired={false}
              value=''
              />

            <div className={styles.formButton}>
              <Button />
            </div>
            
          </div>

        </form>
        
      </div>
      
      <div className={styles.aside}>
      
        <Image src={imageRegistration1} alt="Coral branco com fundo de praia" className={styles.img1} height={170} width={350}/>
        
        <Image src={imageRegistration2} alt="corais brancos no fundo do mar" height={170} width={350}/>
        
      </div>
     </Back>
    </>
  )
}