import * as yup from "yup"

export const schema = yup
  .object({
    email: yup.string().email("Deve ser um email válido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();