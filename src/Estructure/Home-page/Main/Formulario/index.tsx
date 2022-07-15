import * as S from './style';
import relogio from "../assets/relogio.svg";


const Form = () => {

    return <S.Container> 

        <main id='container'>

        <section>
            <img src={relogio} alt=""/>
            <h1>
                Cadastro
            </h1>
        </section>

        

            <form id='form' className='form' action="">

            <div className='form-control-email'>
                <input type="text" name="email" id="email" placeholder='Digite seu email' required />
            </div>

            <div className='form-control-company'>
                <input type="text" name="company" id="company" placeholder='Digite o nome da empresa' required/>
            </div>

            <div className='form-control-password'>
                <input type="password" name="password" id="password" placeholder='Digite sua senha' required />
            </div>

            <div className='form-control-passwordconfirmation'>
                <input type="password" name="password-confirmation" id="password-confirmation" placeholder='Confirme a senha' required/>
            </div>

            <button type='submit' className='btn-entrar'>
                Enviar
            </button>

                
            </form>

        </main>

    </S.Container>

}

export default Form;