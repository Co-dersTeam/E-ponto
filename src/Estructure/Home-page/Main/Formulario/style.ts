import styled from "styled-components";

export const Container = styled.div`

padding-top: 30%;
padding-left: 60%;

#container{
    background-color: #0b1d6b;
    border-radius: 10px;
    width: 30vw;
    height: 45vw;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 40px 40px 20px 40px;
    
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30%;
}

section img{
    width: 5vw;
    height: auto;
}

section h1{
    color: #fff;
    font-weight: 400;
    font-size: 2vw;
}


.form {
    display: flex;
    flex-direction: column;
    grid-gap: 2.5em;
}

.form-control-email input{
    width: 100%;
    height: 2vw;
    background-color: transparent;
    border: none;
    border-bottom: solid #0073FC;
    padding: 10px;
    outline: none;
    color: white;
    font-size: 1.5vw;
}

.form-control-company input{
    width: 100%;
    height: 2vw;
    background-color: transparent;
    border: none;
    border-bottom: solid #0073FC;
    padding: 10px;
    outline: none;
    color: white;
    font-size: 1.5vw;
}

.form-control-password input{
    width: 100%;
    height: 2vw;
    background-color: transparent;
    border: none;
    border-bottom: solid #0073FC;
    padding: 10px;
    outline: none;
    color: white;
    font-size: 1.5vw;
}

.form-control-passwordconfirmation input{
    width: 100%;
    height: 2vw;
    background-color: transparent;
    border: none;
    border-bottom: solid #0073FC;
    padding: 10px;
    outline: none;
    color: white;
    font-size: 1.5vw;
}

.form-control input::placeholder {
    color: #969E9E;
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 24px;
}


.btn-entrar {
    width: 100%;
    height: 37.01px;
    background: linear-gradient(180deg,
            #0073FC 0%, #556AFE 82.3%, #8266FF 100%);
    color: white;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 29px;
    border: none;
    border-radius: 10px;
    margin-top: 10%;
    cursor: pointer;
    
}

.btn-entrar:hover {
    background: linear-gradient(180deg,
            cyan 0%, #556AFE 82.3%, cyan 100%);
}

//tablet
@media(min-width: 768px) and (max-width: 1023px){
    .form{
        grid-gap: 1.5rem;
    }
    #container{
        width: 35vw;
        height: 60vw;
    }
}

//smartphone
@media(max-width: 767px){


    .form{
        grid-gap: 1.6rem;
    }

    main{
        position: relative;
        
        top: 110vw;
        left: 13vw;
    }

    #container{

        width: 70vw;
        height: 120vw;

    }

section img{
    width: 20vw;
    height: auto;
}
section h1{
    font-size: 6vw;
}

section {
    margin-bottom: 15%;
}

.form-control-email input{
    height: 3vw;
    font-size: 3.8vw;
}

.form-control-company input{
    height: 3vw;
    font-size: 3.8vw;
}

.form-control-password input{
    height: 3vw;
    font-size: 3.8vw;
}

.form-control-passwordconfirmation input{
    height: 3vw;
    font-size: 3.8vw;
}

.btn-entrar{
    font-size: 4vw;
}

}

`