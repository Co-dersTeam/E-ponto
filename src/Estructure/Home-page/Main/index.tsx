import * as S from './style';
import Conteudo_up from './Conteudo_Up';
import Conteudo_down from './Conteudo_Down';
import Form from './Formulario';


const Main = () => {

    return <S.Container> 
        
        <Conteudo_up></Conteudo_up>
        <Conteudo_down></Conteudo_down>
        <Form></Form>
        
    </S.Container>

}

export default Main;