import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";



const Home = () => {



return(
    <>
    <header>
    <img src={logo} alt="Kenzie Hub" />
    <Link to='/'>Sair</Link>
    </header>
    </>


)


}

export default Home