import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations';
import Input from '../Input';
import { useContext } from 'react';
import { TechsContext } from '../../providers/TechsContext/TechsContext';
import { ICreateTechFormValues } from '../../providers/TechsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';

export const FormCreateTech = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTechFormValues>({ resolver: yupResolver(schema) });
  const { techsCreate, SetCreatingTechModal } = useContext(TechsContext);

  const submit: SubmitHandler<ICreateTechFormValues> = (formData) => {
    techsCreate(formData);
  };

  const ref = useOutclick<HTMLFormElement>(() => SetCreatingTechModal(false));

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Cadastrar Tecnologia</h2>
        <button
          className='colorgrey1 weigth600 closeButton'
          type='button'
          onClick={() => SetCreatingTechModal(false)}
        >
          X
        </button>
      </div>
      <Input
        id={'title'}
        placeholder={'Digite tecnologia aqui.'}
        label={'Nome'}
        {...register('title')}
        error={errors.title?.message}
      />

      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor='status'>
          Selecionar módulo
        </label>
        <select id='status' {...register('status')}>
          <option hidden value=''>
            Selecione o status
          </option>
          <option value='Iniciante'>Iniciante</option>
          <option value='Intermediário'>Intermediário</option>
          <option value='Avançado'>Avançado</option>
        </select>
        <span className='spanError'>{errors.status?.message}</span>
      </div>
      <SubmitButton className='submitButtonCreate' type='submit'>
        Cadastrar Tecnologia
      </SubmitButton>
    </form>
  );
};
