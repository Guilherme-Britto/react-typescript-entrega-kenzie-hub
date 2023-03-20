import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations';
import Input from '../Input';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { IRegisterFormValues } from '../../providers/UserContext/@types';

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({ resolver: yupResolver(schema) });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        id={'name'}
        placeholder={'Digite aqui seu nome'}
        label={'Nome'}
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        id={'email'}
        placeholder={'Digite aqui seu email'}
        label={'Email'}
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        id={'password'}
        placeholder={'Digite aqui sua senha'}
        label={'Senha'}
        {...register('password')}
        error={errors.password?.message}
        type={'password'}
      />

      <Input
        id={'passwordConfirmation'}
        placeholder={'Digite novamente sua senha'}
        label={'Confirmar Senha'}
        {...register('passwordConfirmation')}
        error={errors.passwordConfirmation?.message}
        type={'password'}
      />

      <Input
        id={'bio'}
        placeholder={'Fale sobre você'}
        label={'Bio'}
        {...register('bio')}
        error={errors.bio?.message}
      />

      <Input
        id={'contact'}
        placeholder={'Opção de contato'}
        label={'Contato'}
        {...register('contact')}
        error={errors.contact?.message}
      />

      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor='course_module'>
          Selecionar módulo
        </label>
        <select id='course_module' {...register('course_module')}>
          <option value='Primeiro módulo (Introdução ao Frontend)'>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value='Segundo módulo (Frontend Avançado)'>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value='Terceiro módulo (Introdução ao Backend)'>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value='Quarto módulo (Backend Avançado)'>
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>

      <SubmitButton className='submitButton' type='submit'>
        Cadastrar
      </SubmitButton>
    </form>
  );
};
