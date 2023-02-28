import { SubmitButton } from "../../styles/styles"
import { useForm } from "react-hook-form"
import Input from "../Input"
import { useContext } from "react"
import { TechsContext } from "../../providers/TechsContext"

export const FormUpdateTech = () => {
    const { techsRemove, techsUpdate, editingTech, SetEditingTech } = useContext(TechsContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            status: editingTech.status
        }
    })

    const submit = (formData) => {
        techsUpdate(formData, editingTech.id)
        SetEditingTech(null)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <button className="colorgrey0 weigth400" type="button" onClick={() => SetEditingTech(null)}>X</button>
            <p>{editingTech.title}</p>
            <div className="input__container">
                <label className="colorgrey0 weigth400" htmlFor="course_module">Selecionar módulo</label>
                <select id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </div>
            <div>
                <SubmitButton type="submit">Atualizar Tecnologia</SubmitButton>
                <button className="colorgrey0 weigth400" type="button" onClick={() => (techsRemove(editingTech.id), SetEditingTech(null))}>Remover</button>
            </div>
        </form>
    )
}