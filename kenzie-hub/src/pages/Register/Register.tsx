import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterMain } from './style';
import { FormRegister } from '../../components/FormRegister';
import logo from '../../assets/Logo.svg';

const Register = () => {
  return (
    <RegisterMain>
      <header>
        <img src={logo} alt='Kenzie Hub' />
        <Link to='/'>Voltar</Link>
      </header>
      <section>
        <h2 className='colorgrey0 weigth700'>Crie sua conta</h2>
        <p className='colorgrey1 weigth400'>Rapido e grátis, vamos nessa</p>
        <FormRegister />
      </section>
    </RegisterMain>
  );
};

export default Register;
