import { useContext } from "react"
import { TechsContext } from "../../../providers/TechsContext"

export const TechsCard = ({ tech }) => {
    const { SetEditingTech, SetCreatingTech } = useContext(TechsContext)

    return (
        <li onClick={() => (SetEditingTech(tech) , SetCreatingTech(null)) }>
            <h3>{tech.title}</h3>
            <p className="colorgrey1">{tech.status}</p>
        </li>
    )
}