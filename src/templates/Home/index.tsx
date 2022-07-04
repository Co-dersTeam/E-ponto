import Footer from '../../Estructure/Home-page/Footer';
import Header from '../../Estructure/Home-page/Header';
import Main from '../../Estructure/Home-page/Main';
import * as S from './styles';





const Home = () =>{
    return <>
    <S.Container>
        <Header></Header>
        <Main></Main>
    </S.Container>
    <Footer></Footer>
    </> 
    
};

export default Home;