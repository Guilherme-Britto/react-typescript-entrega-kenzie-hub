import React from 'react'
import logo from '../../assets/Logo.svg'
import { useForm } from "react-hook-form"
import { api } from '../../services/Api'
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validations"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { RegisterMain } from './style'
import { SubmitButton, InputForm } from '../../styles/styles'
import Input from '../../components/Input/Input'


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response = await api.post("/users", data)
      navigate("/")
      return toast.success("Conta criada com sucesso!", {
        position: toast.POSITION.TOP_CENTER
      })
    } catch (error) {
      return toast.error("E-mail já cadastrado!", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }


  return (
    <RegisterMain>
      <header>
        <img src={logo} alt="Kenzie Hub" />
        <Link to='/'>Voltar</Link>
      </header>
      <section>
        <h2 className='colorgrey0 weigth700'>Crie sua conta</h2>
        <p className='colorgrey1 weigth400'>Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(registerUser)}>
          <Input
            id={"name"}
            placeholder={"Digite aqui seu nome"}
            label={"Nome"}
            {...register("name")}
            error={errors.name?.message} />
  
          <Input
            id={"email"}
            placeholder={"Digite aqui seu email"}
            label={"Email"}
            {...register("email")}
            error={errors.email?.message} />

          <Input
            id={"password"}
            placeholder={"Digite aqui sua senha"}
            label={"Senha"}
            {...register("password")}
            error={errors.password?.message}
            type={"password"} />

          <Input
            id={"passwordConfirmation"}
            placeholder={"Digite novamente sua senha"}
            label={"Confirmar Senha"}
            {...register("passwordConfirmation")}
            error={errors.passwordConfirmation?.message}
            type={"password"} />

          <Input
            id={"bio"}
            placeholder={"Fale sobre você"}
            label={"Bio"}
            {...register("bio")}
            error={errors.bio?.message} />

          <Input
            id={"contact"}
            placeholder={"Opção de contato"}
            label={"Contato"}
            {...register("contact")}
            error={errors.contact?.message} />

          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="course_module">Selecionar módulo</label>
            <select id="course_module" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
              <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
              <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
          </div>

          <SubmitButton className='submitButton' type="submit">Cadastrar</SubmitButton>
        </form>
      </section>
    </RegisterMain>
  )
}

export default Register 