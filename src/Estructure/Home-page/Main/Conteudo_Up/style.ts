import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: row;


.Conteudo {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    width: 50%;
    padding-right: 10%;
}

.Conteudo-2 {
    margin-top: 150px;
    padding-left: 5%;
}



h1 {
    margin-top: 11px;
    margin-bottom: 20px;
    font-size: 2.5vw;
    font-weight: 400;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

}

h5 {
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
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
    width: 40%;
    position: absolute;
    right: 4%;
}
.Conteudo{
    width: 100%;
    padding-left: 3%;
    padding-right: 39%;
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
    position: absolute;
    width: 40%;
    right: 4%;
    padding-top: 9%;
}

.Conteudo{
    
    width: 300px;
    
    padding-left: 5%;
    padding-right: 10%;
    
}

    h1{
        font-size: 5vw;
        width: 250px;
    }

    h5{
        font-size: 4vw;
        line-height: 20px;
        width: 220px;
    }
}

`