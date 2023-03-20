import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechsContext } from '../../providers/TechsContext/TechsContext';
import { IUpdateTechFormValues } from '../../providers/TechsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';

export const FormUpdateTech = () => {
  const { techsRemove, techsUpdate, updaingTech, SetUpdatingTechModal } =
    useContext(TechsContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: updaingTech?.status,
    },
  });

  const submit: SubmitHandler<IUpdateTechFormValues> = (formData) => {
    techsUpdate(formData, updaingTech?.id);
    SetUpdatingTechModal(false);
  };

  const ref = useOutclick<HTMLFormElement>(() => SetUpdatingTechModal(false));

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Tecnologia Detalhes</h2>
        <button
          className='colorgrey0 weigth400'
          type='button'
          onClick={() => SetUpdatingTechModal(false)}
        >
          X
        </button>
      </div>
      <p className='projectNameLabel'>Nome do projeto</p>
      <p className='projectName'>{updaingTech?.title}</p>
      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor='course_module'>
          Selecionar módulo
        </label>
        <select id='status' {...register('status')}>
          <option value='Iniciante'>Iniciante</option>
          <option value='Intermediário'>Intermediário</option>
          <option value='Avançado'>Avançado</option>
        </select>
      </div>
      <div className='buttons__container'>
        <SubmitButton className='submitButtonUpdate' type='submit'>
          Salvar alterações
        </SubmitButton>
        <button
          className='removeButton colorgrey0 weigth400'
          type='button'
          onClick={() => (
            techsRemove(updaingTech?.id), SetUpdatingTechModal(false)
          )}
        >
          Excluir
        </button>
      </div>
    </form>
  );
};
