import { useContext } from "react"
import { TechsContext } from "../../../providers/TechsContext"

export function TechsCard({ tech }) {
    const { SetEditingTech, editingTech } = useContext(TechsContext)

    return (
        <li onClick={() => SetEditingTech(tech) }>
            <h3>{tech.title}</h3>
            <p>{tech.status}</p>
        </li>
    )
}