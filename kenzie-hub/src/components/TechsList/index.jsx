import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechsCard } from "./TechsCard"


export function TechsList() {

    const { techs } = useContext(UserContext)


    return (
        <>
            {techs.length == 0 ?
                <><p>Nenhuma tecnologia adicíonada.</p></> :
                <><ul>
                    {techs.map(tech => (
                        <TechsCard key={tech.id} tech={tech}/>
                    ))}
                </ul></>
            }
        </>
    )
}