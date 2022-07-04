import * as S from './style';
import gestor from '../assets/gestor.svg'


const Conteudo_up = () => {

    return <S.Container> 
    <div className="Conteudo">

      <h1>SISTEMA DE GESTÃO DE
          PONTO ELETRÔNICO</h1>

      <h5>Mais praticidade e segurança no
          controle e gestão online da jornada
          de trabalho da sua equipe.</h5>

    </div>  
    <div className="Conteudo">
      <img className="gestorzin" src={gestor} alt="" />
    </div> 
    </S.Container>

}

export default Conteudo_up;