import * as S from "./style"
import Logo from "./logo/index";
import Menu from "./Menu/index";
import Cadastro from "./cadastro";
import Login from "./Login";
import { useState } from "react";
import LogoClock from './assets/logo.svg';

const Header = () => {

    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    return (
    <>

        <S.response>
        <div className="Menu-responsive">
        <div className={active ? 'icon iconActive':'icon'} onClick={ToggleMode}>
            <div className="Three-points Three-pointsIcon"></div>
        </div>

        <div className={active ? "menu menuOpen": "menu menuClose"}>
            <div className="list">
            <ul className="listItens">
                <li>Home</li>
                <li>Sobre</li>
                <li>Contatos</li>
            </ul>
            <ul className="cadastro-item">
                <li>login</li>
                <li>cadastro</li>
            </ul>
            </div>
        </div>
       
        </div>

        <img className="logo" src={LogoClock} alt="Logo do E-ponto em forma de um relogio" />
        </S.response>

        

    <S.Nav> 
        <Logo />
        <Menu />
        <Login />
        <Cadastro />
    </S.Nav>

    </>)
}

export default Header;