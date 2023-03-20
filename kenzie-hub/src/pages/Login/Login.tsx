import { Link } from 'react-router-dom';
import { LoginMain } from './style';
import 'react-toastify/dist/ReactToastify.css';
import { FormLogin } from '../../components/FormLogin';
import logo from '../../assets/Logo.svg';

const Login = () => {
  return (
    <LoginMain>
      <header>
        <img src={logo} alt='Kenzie Hub' />
      </header>
      <section>
        <h2 className='colorgrey0 weigth700'>Login</h2>
        <FormLogin />
        <p className='colorgrey1 weigth600'>Ainda não possui uma conta?</p>
        <Link to='/register' className='backgroundgrey1'>
          Cadastre-se
        </Link>
      </section>
    </LoginMain>
  );
};

export default Login;
