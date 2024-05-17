import Register from "../pages/register/index"
import Login from "../pages/login/index"
import Home from "../pages/cardHome/index"
import { Routes, Route } from "react-router-dom"
import Details from './../pages/details/index';
import Frequencia from "../pages/faltas";
import HomeAdm from "../pages/home-page-adm";


export const RoutesApp = () =>{
    
    return (
        <>
        
            <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/details" element={<Details />}/>
                    <Route path="/frequencia" element={<Frequencia />}/>
                    <Route path="/homeAdm" element={<HomeAdm />}/>
            </Routes>
        </>
    
    )
}