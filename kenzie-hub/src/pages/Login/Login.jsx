import React from 'react'
import logo from '../../assets/Logo.svg'
import { useForm } from "react-hook-form";
import { api } from '../../services/Api';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions ", data)
      console.log(response)
      localStorage.setItem("@KENZIEHUB", JSON.stringify(response.data.token))

      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <img src={logo} alt="Kenzie Hub" />
      <form onSubmit={handleSubmit(loginUser)}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" {...register("email")} placeholder="Digite aqui seu nome" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" {...register("password")} placeholder="Digite aqui seu nome" />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">Entrar</button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Link to='/register'>Cadastre-se</Link>
    </section>
  )
}

export default Login