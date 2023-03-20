import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/Api';
import { ITech } from '../TechsContext/@types';
import {
  IDefaultProviderProps,
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
  IUserContext,
} from './@types';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(false);
  const [user, SetUser] = useState<IUser | null>(null);
  const [techs, SetTechs] = useState<ITech[]>([]);
  const [allowLogin, SetAllowLogin] = useState(false);

  const autoLogin = async () => {
    navigate('/home');
    const token = localStorage.getItem('@KENZIEHUB:token');

    SetLoading(true);
    try {
      const response = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      SetUser(response.data);
      SetTechs(response.data.techs);
    } catch (error) {
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@KENZIEHUB:token');

    if (token) {
      SetAllowLogin(true);
      autoLogin();
    }
  }, []);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post('/users', formData);
      navigate('/');
      toast.success('Conta criada com sucesso!');
    } catch (error) {
      toast.error('E-mail já cadastrado!');
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/sessions ', formData);
      localStorage.setItem('@KENZIEHUB:token', response.data.token);

      SetAllowLogin(true);
      autoLogin();
    } catch (error) {
      toast.error('E-mail ou senha incorretos!');
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@KENZIEHUB:token');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        userLogout,
        loading,
        user,
        techs,
        SetTechs,
        allowLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
