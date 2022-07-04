import * as S from './style';
import clock from './assets/relogio.svg';
import icontwiter from './assets/icontwiter.svg';
import iconinsta from './assets/iconinsta.svg';
import icongit from './assets/icongit.svg';


const InfoFooter = () => {

    return <S.container>
    
    <div className='downpage'>

    

    <table className='table-footer'>

    <tr className='conteudo-1'>
        <td rowSpan={4}><img className='clock-footer' src={clock} alt="" /></td>
        <td className='titulo-1'>Direito de uso</td>
        <td className='titulo-2'>Links:</td>
        <td className='titulo-3'>Nossas redes:</td>
    </tr>

    <tr className='conteudo-2'>
        <td className='copyright-footer' rowSpan={3}>

        <h6>
        Todo o conteúdo do site é protegido por direitos autorais,
        e seu uso, cópia, transmissão, venda, cessão ou revenda,
        deve seguir a lei brasileira, tendo a EMPRESA todos os seus direitos reservados,
        e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.
        </h6>

             </td>
        <td className='conteudo-linha-1'><a href="">Inicio</a></td>
        <td className='conteudo-linha-2'><a href=""><img className='icon' src={icontwiter} alt="" /></a></td>
    </tr>

    <tr className='conteudo-3'>
        <td className='conteudo-linha-1'><a href="">Sobre</a></td>
        <td className='conteudo-linha-2'><a href=""><img className='icon' src={icongit} alt="" /></a></td>
    </tr>

    <tr className='conteudo-4'>
        <td className='conteudo-linha-1'><a href="">Contato</a></td>
        <td className='conteudo-linha-2'><a href=""></a><img className='icon' src={iconinsta} alt="" /></td>
    </tr>

    </table>

    </div>


    </S.container>


}




export default InfoFooter;