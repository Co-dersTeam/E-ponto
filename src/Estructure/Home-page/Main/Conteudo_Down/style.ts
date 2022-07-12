import styled from "styled-components";

export const Container = styled.div`

//container mestre
.container-father{
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    //separação entre os conteudos
    padding-top: 20%;
}

//first container-children
.container-security{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-security img{
    width: 100%;
}

.container-security h5{
    font-weight: 400;
    font-size: 1.8vw;
    padding-top: 30%;
    //tamanho do quadro de texto
    width: 17.7vw;

    text-align: center;

}



//second container-children
.container-biometric{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-biometric img{
    width: 100%;
}

.container-biometric h5{
    font-weight: 400;
    padding-top: 30%;
    font-size: 1.8vw;
    //tamanho do quadro de texto
    width: 17.7vw;
    text-align: center;
}



//thirt container-children
.container-justice{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-justice img{
    width: 100%;
}

.container-justice h5{
    font-weight: 400;
    padding-top: 30%;
    font-size: 1.8vw;
    //tamanho do quadro de texto
    width: 17.7vw;
    text-align: center;
}

//tablet
@media(min-width: 768px) and (max-width: 1023px){

.container-father{
    padding-top: 30%;
}

.container-security img{
    width: 90%;
    padding-left: 10%;
}

.container-biometric img{
    width: 90%;
    padding-left: 10%;
}

.container-justice img{
    width: 90%;
    padding-left: 10%;
}

}

//smartphone
@media(max-width: 767px){
    .container-father{
        position: absolute;
    padding-top: 30%;
}

.container-security img{
    width: 75%;
    padding-left: 25%;
}

.container-security h5 {
    font-weight: 400;
    font-size: 3vw;
    padding-top: 30%;
    //tamanho do quadro de texto
    width: 20vw;
    text-align: center;
}

.container-biometric img{
    width: 75%;
    padding-left: 25%;
}

.container-biometric h5 {
    font-weight: 400;
    font-size: 3vw;
    padding-top: 30%;
    //tamanho do quadro de texto
    width: 17.7vw;
    text-align: center

}

.container-justice img{
    width: 75%;
    padding-left: 25%;
}

.container-justice h5{
    font-weight: 400;
    font-size: 3vw;
    padding-top: 30%;
    //tamanho do quadro de texto
    width: 17.7vw;
    text-align: center
}
}
`