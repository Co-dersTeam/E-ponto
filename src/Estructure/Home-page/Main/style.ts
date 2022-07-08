import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: row;


.Conteudo {
    margin-top: 150px;
    width: 50%;
}

.gestorzin {
    padding-left: 10%;
}

h1 {
    margin-top: 11px;
    margin-bottom: 20px;
    padding-right: 94px;
    font-size: 2.5vw;
    font-weight: 400;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

}

h5 {
    padding-right: 170px;
    font-weight: normal;
    font-size: 1.7vw;
    line-height: 33px;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: 0.7;
}

//desktop
@media(min-width: 1024px) {
    
}

//tablet
@media(min-width: 768px) and (max-width: 1023px) {

    .gestorzin {
    width: 80%;
}
.Conteudo{
    padding-left: 3%;
}

    h1{
        padding-right: 1%;
        font-size: 3.5vw;
    }

    h5{
        padding-right: 15%;
        font-size: 2vw;
        line-height: 25px;
    }

}

//smartphone
@media(max-width: 767px) {
    .gestorzin {
    padding-top: 5%;
    width: 50%;
    position: absolute;
    right: 2%;
}

.Conteudo{
    padding-left: 10%;
}

    h1{
        top: 20%;
        left: 3%;
        padding-right: 40%;
        font-size: 5vw;
        position: absolute;
    }

    h5{
        left: 3%;
        top: 30%;
        padding-right: 38%;
        font-size: 4vw;
        position: absolute;
        line-height: 20px;
    }
}

`