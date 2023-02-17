import React from 'react'
import logo from '../../assets/Logo.svg'
import { useForm } from "react-hook-form"
import { api } from '../../services/Api'
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validations"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { LoginMain } from "./style"
import "react-toastify/dist/ReactToastify.css"
import { SubmitButton, InputForm } from '../../styles/styles'
import Input from '../../components/Input/Input'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions ", data)

      localStorage.setItem("@KENZIEHUB:token", JSON.stringify(response.data.token))
      localStorage.setItem("@KENZIEHUB:userID", JSON.stringify(response.data.user.id))

      navigate("/home")
    } catch (error) {
      return toast.error("E-mail ou senha incorretos!", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return (
    <LoginMain>
      <header>
        <img src={logo} alt="Kenzie Hub" />
      </header>
      <section>
        <h2 className='colorgrey0 weigth700'>Login</h2>
        <form onSubmit={handleSubmit(loginUser)}>
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
            type={"password"}/>

          <SubmitButton type="submit">Entrar</SubmitButton>
        </form>
        <p className='colorgrey1 weigth600'>Ainda não possui uma conta?</p>
        <Link to='/register' className='backgroundgrey1'>Cadastre-se</Link>
      </section>
    </LoginMain>
  )
}

export default Login