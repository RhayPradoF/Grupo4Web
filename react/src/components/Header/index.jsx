import React from 'react'
import { Cabecalho, ItemLink, ItemMenu, Logo, Menu} from './Header.style'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Cabecalho>
        <Logo src={logo} alt='Cantina da pizza logo'/>
          <Menu>
            <ItemMenu><ItemLink to='/'>Home</ItemLink></ItemMenu>
            <ItemMenu><ItemLink to='/sobre'>Sobre-nós</ItemLink></ItemMenu>
            <ItemMenu><ItemLink to='/contatos'>Contatos</ItemLink></ItemMenu>
            <ItemMenu><ItemLink to='/login'>Entrar</ItemLink></ItemMenu>
          </Menu>
    </Cabecalho>
  )
}
