import * as S from "./style";
import Coder1 from "./Integrante-1";
import Coder2 from "./Integrante-2";
import Coder3 from "./Integrante-3";




const TeamCoders = () => {
    return <S.Team>
        <table>

       <td className="member1"> <Coder1/> </td>

    <div className="member2">
       <td> <Coder2/> </td>
    </div>

       <td className="member3">  <Coder3/> </td>

       </table>
    </S.Team>
}

export default TeamCoders;