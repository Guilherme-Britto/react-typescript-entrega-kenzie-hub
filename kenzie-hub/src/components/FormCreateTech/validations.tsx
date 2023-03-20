import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup.string().required('Campo obrigatório'),
    status: yup
      .string()
      .oneOf(['Iniciante', 'Intermediário', 'Avançado'], 'Selecione um status'),
  })
  .required();
