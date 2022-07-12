import * as S from './style';
import biometric from '../assets/biometria.svg';
import hammer from '../assets/justica.svg';
import lock from '../assets/seguranca.svg';


const Conteudo_down = () => {

    return <S.Container> 
        <section className='container-father'>

            <div className='container-security'>
                <div className='children-security-1'>
                    <img className='lock' src={lock} alt="" />
                </div>
                <div className='children-security-2'>
                    <h5 className='security-text'>
                        Todas as informações estão salvas e protegidas em nosso banco de dados !!
                    </h5>
                </div>
            </div>

                <div className='container-biometric'>
                    <div className='children-biometric-1'>
                        <img className='biometric' src={biometric} alt="" />
                    </div>
                    <div className='children-biometric-2'>
                        <h5 className='biometric-text'>
                            Marcação de ponto rápida e eficiente
                        </h5>
                    </div>
                </div>

                    <div className='container-justice'>
                        <div className='children-justice-1'>
                            <img className='hammer' src={hammer} alt="" />
                        </div>
                        <div className='children-justice-2'>
                            <h5 className='justice-text'>
                                Conforme a lei e as exigências da portaria MTE
                            </h5>
                        </div>
                    </div>
        </section>
    </S.Container>

}

export default Conteudo_down;