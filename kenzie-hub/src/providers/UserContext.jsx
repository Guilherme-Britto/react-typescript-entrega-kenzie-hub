import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/Api"


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(false)
  const [user, SetUser] = useState(null)
  const [techs, SetTechs] = useState(null)

  const autoLogin = async () => {
    navigate("/home")
    const token = (localStorage.getItem("@KENZIEHUB:token"))

    SetLoading(true)
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      SetUser(response.data)
      SetTechs(response.data.techs)
    } catch (error) {

    } finally {
      SetLoading(false)
    }
  }

  useEffect(() => {
    const token = (localStorage.getItem("@KENZIEHUB:token"))

    if (token) {

      SetUser([])
      autoLogin()
    }
  }, [])

  const userRegister = async (formData) => {
    try {
      const response = await api.post("/users", formData)
      navigate("/")
      return toast.success("Conta criada com sucesso!")
    } catch (error) {
      return toast.error("E-mail já cadastrado!")
    }
  }

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/sessions ", formData)
      localStorage.setItem("@KENZIEHUB:token", (response.data.token))

      SetUser([])
      autoLogin()
    } catch (error) {
      return toast.error("E-mail ou senha incorretos!")
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@KENZIEHUB:token");
    navigate("/")
  }

  return (
    <UserContext.Provider value={{
      userRegister,
      userLogin,
      userLogout,
      loading,
      user,
      techs,
      SetTechs
    }}>
      {children}
    </UserContext.Provider>
  )
}