/* eslint-disable no-unused-vars */
import Register from "../pages/register/index"
import Login from "../pages/login/index"
import Home from "../pages/cardHome/index"
import { Routes, Route } from "react-router-dom"
import Details from './../pages/details/index';
import Frequencia from "../pages/faltas";
import HomeAdm from "../pages/home-page-adm";
import CoefTable from "../pages/coef-table/index";
import React, { useState } from 'react';

export const RoutesApp = () =>{
    const [users, setUsers] = useState([]);
    return (
        <>
        
            <Routes>
                    <Route path="/" element={<Login users={users} />} />
                    <Route path="/Register" element={<Register setUsers={setUsers} />} />
                    <Route path="/home" element={<Home />}/>
                    <Route path="/details" element={<Details />}/>
                    <Route path="/frequencia" element={<Frequencia />}/>
                    <Route path="/homeAdm" element={<HomeAdm />}/>
                    <Route path="/tableCoef" element={<CoefTable />}/>
            </Routes>
        </>
    
    )
}