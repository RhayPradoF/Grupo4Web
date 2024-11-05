import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contatos from '../pages/Contatos'
import Login from '../pages/Login'
import Editor from '../pages/Editor'
import Cadastro from '../pages/Cadastro'


export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/contatos' element={<Contatos/>}></Route>
        <Route path='/editor' element={<Editor/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path= '/cadastro' element={<Cadastro/>}></Route>
        
    </Routes>
  )
}
