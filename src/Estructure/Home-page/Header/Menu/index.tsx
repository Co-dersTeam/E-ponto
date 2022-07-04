import * as S from "./style"


const Menu = () => {

    return <S.MenuNav>

     <S.ItemNav> 
         <a className="item-header" href="/">Home</a>
     </S.ItemNav>

     <S.ItemNav> 
         <a className="item-header" href="/sobre">Sobre</a> 
     </S.ItemNav>

     <S.ItemNav>  
         <a className="item-header" href="/contatos">Contatos</a>
     </S.ItemNav>

    </S.MenuNav>

}

export default Menu;