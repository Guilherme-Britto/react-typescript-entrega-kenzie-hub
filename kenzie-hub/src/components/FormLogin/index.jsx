import { SubmitButton } from "../../styles/styles"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validations"
import Input from "../Input"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const { userLogin } = useContext(UserContext)

    const submit = (formData) => {
        userLogin(formData);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
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

            <SubmitButton type="submit">Entrar</SubmitButton>
        </form>
    )
}