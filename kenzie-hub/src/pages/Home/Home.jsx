import logo from '../../assets/Logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { api } from '../../services/Api';
import { HomeMain, TechInfo, UserInfo } from './style';



const Home = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("@KENZIEHUB:token")

  console.log(token)

  const getUser = async () => {


    try {
      const response = await api.get('/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  getUser()

  const sair = () => {
    localStorage.clear();

    navigate("/")
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
          <h2 className='colorgrey0 weigth700'>Olá, Samuel Leão</h2>
          <p className='colorgrey1 weigth400'>Primeiro módulo  Introdução ao Frontend</p>
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