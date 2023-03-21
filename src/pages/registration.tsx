import Image from 'next/image'

import styles from '../styles/registration.module.css'

import imageRegistration from 'public/img/image-registration-1.jpg'

import { Back } from '@/components/Back';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { FormEvent, useState } from 'react';
import { postRegistration } from './api/registration/post';
import { RegistrationForm } from '@/types/Registration';
import api from '@/services/api';
import { useRouter } from 'next/router';

export default function Registration() {

  const router = useRouter()

  const [nameStudentOne, setNameStudentOne] = useState<string>('');
  const [nameStudentTwo, setNameStudentTwo] = useState<string>('');
  const [nameAdvisorOne, setNameAdvisorOne] = useState<string>('');
  const [nameAdvisorTwo, setNameAdvisorTwo] = useState<string>('');
  const [nameSchool, setNameSchool] = useState<string>('');
  const [nameArticle, setNameArticle] = useState<string>('');
  const [article, setArticle] = useState<File | null>(null);
  
  function handleFile (event : any) {
    if (event.target.files && event.target.files[0]) {
      setArticle(event.target.files[0])
    } 
  }
  
  async function handleSubmitForm(event : FormEvent) {
    event.preventDefault()

    try {
      if(article) {

        const formData : RegistrationForm = {
          nameStudentOne,
          nameStudentTwo,
          nameAdvisorOne,
          nameAdvisorTwo,
          nameSchool,
          nameArticle,
          article,
        }
  
        await postRegistration(formData)
        
        setNameStudentOne('')
        setNameStudentTwo('')
        setNameAdvisorOne('')
        setNameAdvisorTwo('')
        setNameSchool('')
        setNameArticle('')
        setArticle(null)
      }
    } catch (err) {
      alert(err)
    } finally {
      router.push('./')
    }
  }

  return(
    <>
     <Back>
      
      <div className={styles.center}>
        
        <h1>Inscrição</h1>
        
        <form onSubmit={handleSubmitForm} action={`${api}media/media/articles/`} method="post" encType="multipart/form-data" className={styles.form}>

          <div className={styles.formLeft}>

            <InputText 
              type="text"
              label='Nome Estudante 1:'
              name='nameStudentOne'
              isRequired={true}
              value={nameStudentOne}
              onChange={(event) => setNameStudentOne(event.target.value)} 
              />
            
            <InputText 
              type="text"
              label='Nome Estudante 2:'
              name='nameStudentTwo'
              isRequired={false}
              value={nameStudentTwo}
              onChange={(event) => setNameStudentTwo(event.target.value)} 
            />

            <InputText 
              type="text"
              label='Nome do artigo:'
              name='nameArticle'
              isRequired={true}
              value={nameArticle}
              onChange={(event) => setNameArticle(event.target.value)} 
              />
                      
             <input
               type="file"
               name="article"
               id="article"
               accept=".pdf"
               onChange={handleFile}
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
        
        <Image src={imageRegistration} alt="corais brancos no fundo do mar"/>
        
      </div>
     </Back>
    </>
  )
}