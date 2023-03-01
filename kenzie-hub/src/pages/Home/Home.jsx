import logo from "../../assets/Logo.svg"
import { HomeMain, TechInfo, UserInfo } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { FormCreateTech } from "../../components/FormCreateTech"
import { TechsContext } from "../../providers/TechsContext"
import { TechsList } from "../../components/TechsList"
import { FormUpdateTech } from "../../components/FormUpdateTech"
import { Modal } from "../../styles/styles"

const Home = () => {
  const { userLogout, loading, user } = useContext(UserContext)
  const { editingTech, creatingTech, SetCreatingTech, SetEditingTech } = useContext(TechsContext)

  if (loading) {
    return (
      <HomeMain>
        <header>
          <div className="headerDiv">
            <img src={logo} alt="Kenzie Hub" />
            <button className="headerButton colorgrey0 weigth600" onClick={() => { userLogout() }}>Sair</button>
          </div>
        </header>
        <h1 className="colorgrey0">Carregando...</h1>
      </HomeMain>
    )
  }

  return (
    <HomeMain>
      <nav>
        <div className="headerDiv">
          <img src={logo} alt="Kenzie Hub" />
          <button className="headerButton colorgrey0 weigth600" onClick={() => { userLogout() }}>Sair</button>
        </div>
      </nav>
      <UserInfo>
        <div>
          <h2 className="colorgrey0 weigth700">Olá, {user.name}</h2>
          <p className="colorgrey1 weigth400">{user.course_module}</p>
        </div>
      </UserInfo>
      <TechInfo>
        <section className="techInfoHeader">
          <h1 className="colorgrey0 weigth700" >Tecnologias</h1>
          <button className="colorgrey0 weigth700" onClick={() => (SetCreatingTech(true), SetEditingTech(null))}>+</button>
        </section>
        <TechsList />
        <Modal>
          <div className="modalDiv">
            {creatingTech && <FormCreateTech />}
          </div>
        </Modal>
        <Modal>
          <div className="modalDiv">
            {editingTech && <FormUpdateTech />}
          </div>
        </Modal>
      </TechInfo>
    </HomeMain>
  )
}

export default Home