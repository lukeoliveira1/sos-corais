import Image from 'next/image'

import styles from '../styles/articles.module.css'

import imageArticle from 'public/img/image-articles.png'

import { Back } from '@/components/Back'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function ArticlesWithoutLogin() {

  const router = useRouter()

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleLogin(event : FormEvent) {
    event.preventDefault()

    console.log(user, password)
    
    if(user === 'admin' && password === '1234') {
      router.push('./articles-login')
    } else {
      alert('You are not administrator!')
    }

    setUser('')
    setPassword('')
  }

  return(
    <>
       <Back>        

          <div className={styles.center}>
                    
          <h1 className={styles.title}>Artigos</h1>
          
          <section className={styles.lineArticleH1}></section>

          <div className={styles.divLogin}>
            <form onSubmit={handleLogin}>
              
            <InputText 
              type='text'
              label='Usuário:'
              name='user'
              isRequired={true}
              value={user}
              onChange={(event) => setUser(event.target.value)} 
              />

            <InputText 
              type='password'
              label='Senha:'
              name='password'
              isRequired={false}
              value={password}
              onChange={(event) => setPassword(event.target.value)} 
              />

            <div className={styles.formButton}>
              <Button />
            </div>

            </form>
          </div>

        </div>
        
        <div className={styles.aside}>
        
          <p>
          O branqueamento dos corais é causado por uma série de fatores, como a elevação da temperatura da água do mar, a poluição, a acidificação dos oceanos e eventos climáticos extremos. Esses fatores podem afetar a relação simbiótica entre os corais e as algas, levando à expulsão das algas pelos corais. O branqueamento pode levar à morte dos corais, o que pode ter consequências devastadoras para os ecossistemas marinhos e para as comunidades que dependem dos recursos marinhos para sua subsistência. Por isso, é importante promover ações de conservação dos recifes de coral e reduzir as emissões de gases de efeito estufa que contribuem para o aquecimento global e a acidificação dos oceanos.
          </p>
    
          
          <Image src={imageArticle} alt="corais e peixes no fundo do mar" height={250} width={350}/>
          
        </div>
              
      </Back>
    </>
  )
}