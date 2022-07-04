import * as S from "./style";
import man from "../assets/man-avatar.svg";



const Cadastro = () => {

    function handleScroll() {
        window.scrollTo({
          top:1870,
          behavior: "smooth",
        });
      }

    return <S.Container> 
      <a onClick={handleScroll}> <img src={man} alt="" /> </a>
    </S.Container>

}

export default Cadastro;