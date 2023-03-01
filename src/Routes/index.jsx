import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Favoritas } from "../Pages/Favoritas"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"

export const Rotas = () => {

    const  navigation = useNavigate();
    const userName = localStorage.getItem('userName')

    useEffect(() => {
        if(userName == null) {
            navigation('/')
        }else {
            navigation('/home')
        }
    }, [userName])


    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/favoritas" element={<Favoritas/>}/>
        </Routes>
    )
}