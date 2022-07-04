import * as S from "./style";
import Daniel from "./assets/Daniel.svg"




const Coder1 = () => {

    return <S.TeamMember>  

        <div className="Container-team">
            <div className="background">
            <h1 className="Title">Dev back-end</h1>
            <img className="team-member" src={Daniel} alt="" />
            <div className="text">
                Hello this is a test
                i want to make this my
                bio and i will be happy if 
                this work correct
            </div>
            <h1 className="Title-bottom">#Team management</h1>
            </div>
        </div>

    </S.TeamMember>
}

export default Coder1;