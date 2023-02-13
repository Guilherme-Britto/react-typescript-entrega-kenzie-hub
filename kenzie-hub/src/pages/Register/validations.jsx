import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatório"),
  
    password: yup.string()
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup.string().oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha").required('Confirmação de senha é obrigatória')

  })
  .required();