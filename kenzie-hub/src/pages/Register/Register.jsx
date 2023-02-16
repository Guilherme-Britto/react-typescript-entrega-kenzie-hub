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
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="name">Nome</label>
            <InputForm id="name" type="text" {...register("name")} placeholder="Digite aqui seu nome" />
            <span className='spanError'>{errors.name?.message}</span>
          </div>
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="email">Email</label>
            <InputForm id="email" type="text" {...register("email")} placeholder="Digite aqui seu email" />
            <span className='spanError'>{errors.email?.message}</span>
          </div>
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="password">Senha</label>
            <InputForm id="password" type="password" {...register("password")} placeholder="Digite aqui sua senha" />
            <span className='spanError'>{errors.password?.message}</span>
          </div>
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="passwordConfirmation">Confirmar Senha</label>
            <InputForm id="passwordConfirmation" type="password" {...register("passwordConfirmation")} placeholder="Digite novamente sua senha" />
            <span className='spanError'>{errors.passwordConfirmation?.message}</span>
          </div>
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="bio">Bio</label>
            <InputForm id="bio" type="text" {...register("bio")} placeholder="Fale sobre você" />
            <span className='spanError'>{errors.bio?.message}</span>
          </div>
          <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor="contact">Contato</label>
            <InputForm id="contact" type="text" {...register("contact")} placeholder="Opção de contato" />
            <span className='spanError'>{errors.contact?.message}</span>
          </div>

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