import Image from 'next/image'

import styles from '../styles/registration.module.css'

import imageRegistration1 from 'public/img/image-registration-1.png'
import imageRegistration2 from 'public/img/image-registration-2.png'


import { Back } from '@/components/Back';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { FormEvent, useState } from 'react';


export default function Registration() {

  const [nameStudentOne, setNameStudentOne] = useState<string>('');
  const [nameStudentTwo, setNameStudentTwo] = useState<string>('');
  const [nameAdvisorOne, setNameAdvisorOne] = useState<string>('');
  const [nameAdvisorTwo, setNameAdvisorTwo] = useState<string>('');
  const [nameSchool, setNameSchool] = useState<string>('');
  const [nameArticle, setNameArticle] = useState<string>('');
  const [article, setArticle] = useState<File | null>(null);
  
  function handleSubmitForm(event : FormEvent) {
    event.preventDefault()

    const formData = {
      nameStudentOne,
      nameStudentTwo,
      nameAdvisorOne,
      nameAdvisorTwo,
      nameSchool,
      nameArticle,
      article
    }
   
    console.log(formData)

    setNameStudentOne('')
    setNameStudentTwo('')
    setNameAdvisorOne('')
    setNameAdvisorTwo('')
    setNameSchool('')
    setNameArticle('')
    setArticle(null)
  }

  return(
    <>
     <Back>
      
      <div className={styles.center}>
        
        <h1>Inscrição</h1>
        
        <form onSubmit={handleSubmitForm} className={styles.form}>

          <div className={styles.formLeft}>

            <InputText 
              type="text"
              label='Nome Estudante 1:'
              name='nameStudentFirst'
              isRequired={true}
              value={nameStudentOne}
              onChange={(event) => setNameStudentOne(event.target.value)} 
              />
            
            <InputText 
              type="text"
              label='Nome Estudante 2:'
              name='nameStudentSeconde'
              isRequired={false}
              value={nameStudentTwo}
              onChange={(event) => setNameStudentTwo(event.target.value)} 
            />

            <InputText 
              type="text"
              label='Nome do artigo:'
              name='articleName'
              isRequired={true}
              value={nameArticle}
              onChange={(event) => setNameArticle(event.target.value)} 
              />
                      
             <input
               type="file"
               name="article"
               id="article"
               onChange={(event)=> setArticle(event.target.files && event.target.files[0])}
               className={styles.sendFile}
             />
            
          </div>

          <div className={styles.formRight}>

            <InputText 
              type="text"
              label='Escola:'
              name='schoolName'
              isRequired={true}
              value={nameSchool}
              onChange={(event) => setNameSchool(event.target.value)} 
              />
            
            <InputText 
              type="text"
              label='Orientador 1:'
              name='advisorOne'
              isRequired={true}
              value={nameAdvisorOne}
              onChange={(event) => setNameAdvisorOne(event.target.value)} 
            />

            <InputText 
              type="text"
              label='Orientador 2:'
              name='advisorTwo'
              isRequired={false}
              value={nameAdvisorTwo}
              onChange={(event) => setNameAdvisorTwo(event.target.value)} 
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