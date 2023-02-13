import React from 'react'
import logo from '../../assets/Logo.svg'
import { useForm } from "react-hook-form";
import { api } from '../../services/Api';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const navigate = useNavigate();

  const registerUser = async (data) => {
    console.log(data)
    try {
      const response = await api.post("/users", data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section>
      <div>
        <img src={logo} alt="Kenzie Hub" />
        <Link to='/'>Voltar</Link>
      </div>
      <h2>Crie sua conta</h2>
      <p>Rapido e grátis, vamos nessa</p>
      <form onSubmit={handleSubmit(registerUser)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" {...register("name")} placeholder="Digite aqui seu nome" />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" {...register("email")} placeholder="Digite aqui seu email" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" {...register("password")} placeholder="Digite aqui sua senha" />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirmar Senha</label>
          <input id="passwordConfirmation" type="password" {...register("passwordConfirmation")} placeholder="Digite novamente sua senha" />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input id="bio" type="text" {...register("bio")} placeholder="Fale sobre você" />
          <p>{errors.bio?.message}</p>
        </div>
        <div>
          <label htmlFor="contact">Contato</label>
          <input id="contact" type="text" {...register("contact")} placeholder="Opção de contato" />
          <p>{errors.contact?.message}</p>
        </div>
        <label htmlFor="course_module">Selecionar módulo</label>

        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}

export default Register