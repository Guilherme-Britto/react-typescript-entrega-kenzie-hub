import logo from '../../assets/Logo.svg'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { api } from '../../services/Api'
import { HomeMain, TechInfo, UserInfo } from './style'



const Home = () => {
  const navigate = useNavigate()
  const [loading, SetLoading] = useState(false)
  const [userInfo, SetUserInfo] = useState([])

  useEffect(() => {
    const getUser = async () => {

      SetLoading(true)
      const token = JSON.parse(localStorage.getItem("@KENZIEHUB:token"))

      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        SetUserInfo(response.data)
      } catch (error) {
      } finally {
        SetLoading(false)
      }

    }

    getUser()
  }, [])

  const sair = () => {
    localStorage.clear();

    navigate("/")
  }

  if (loading) {
    return (
    <HomeMain>
      <header>
        <div className='headerDiv'>
          <img src={logo} alt="Kenzie Hub" />
          <button className='headerButton colorgrey0 weigth600' onClick={() => { sair() }}>Sair</button>
        </div>
      </header>
      <h1 ame='colorgrey0'>Carregando...</h1>
    </HomeMain>
    )
  }

  return (
    <HomeMain>
      <header>
        <div className='headerDiv'>
          <img src={logo} alt="Kenzie Hub" />
          <button className='headerButton colorgrey0 weigth600' onClick={() => { sair() }}>Sair</button>
        </div>
      </header>
      <UserInfo>
        <div>
          <h2 className='colorgrey0 weigth700'>Olá, {userInfo.name}</h2>
          <p className='colorgrey1 weigth400'>{userInfo.course_module}</p>
        </div>
      </UserInfo>
      <TechInfo>
        <div>
          <h2 className='colorgrey0 weigth700'>Que pena! Estamos em desenvolvimento :(</h2>
          <p className='colorWhiteFixed weigth400'>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </TechInfo>
    </HomeMain>

  )


}

export default Home