import * as S from "./style"
import Logo from "./logo/index";
import Menu from "./Menu/index";
import Cadastro from "./cadastro";
import Login from "./Login";

const Header = () => {
    return (<S.Nav>
        <Logo />
        <Menu />
        <Login />
        <Cadastro />
    </S.Nav>)
}

export default Header;