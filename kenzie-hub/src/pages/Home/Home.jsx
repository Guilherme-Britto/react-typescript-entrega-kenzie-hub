import logo from '../../assets/Logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';



const Home = () => {
    const navigate = useNavigate()



const sair = () => {
    localStorage.clear();

    navigate("/")
}

return(
    <>
    <header>
    <img src={logo} alt="Kenzie Hub" />
    <button onClick={() => {sair()}}>Sair</button>
    </header>
    </>


)


}

export default Home