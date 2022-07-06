import styled from "styled-components";

export const response = styled.header`

//desktop
@media(min-width: 1024px) {
    width: 0px;
    display: none;
}

//tablet
@media(min-width: 768px) and (max-width: 1023px) {
    

.Menu-responsive{
    display: flex;
    padding-top: 2.7%;
    flex-direction: row;
}

.logo{
    float: right;
}

    .response-delete {
        width: 0;
        display: none;
    }

 .Three-points{
    left: 1%;
    top: 4.5%;
    position: absolute;
    width: 37px;
    height: 6px;
    border-radius: 20px;
    background: black;
    transition: 0.25s ease-in-out;
 }

 .Three-points::before{
    top: -12px;
    content: '';
    position: absolute;
    border-radius: 20px;
    width: 37px;
    height: 6px;
    background: black;
    transition: 0.5s;
 }

 .Three-points::after{
    top: 12px;
    content: '';
    position: absolute;
    border-radius: 20px;
    width: 37px;
    height: 6px;
    background: black;
    transition: 0.5s;
 }


    .list{
        display: flex;
        flex-direction: column;
        left: 1%;
        padding: 45px 0 0;
        color: white;
        flex-wrap: nowrap;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .list .listItens{
        padding: 0;
        list-style: none;
    }
    .list .listItens li{
        margin: 2px 8px;
        cursor: pointer;
    }
    .list .cadastro-item li{
        margin: 2px 8px;
        cursor: pointer;
    }
    
    .icon.iconActive .Three-points {
        background: transparent;
    }

    .icon.iconActive .Three-points::after {
        top: 0;
        background: #fff;
        transform: rotate(225deg);
    }

    .icon.iconActive .Three-points::before {
        top: 0;
        background: #fff;
        transform: rotate(135deg);
    }

    .menu.menuOpen {
        width: 150px;
        height: 100vh;
        background: #000;
        transition: 3s ease-in-out;

    }

    .menu.menuClose {
        display: none;
        width: 0px;
    }




}

//smartphone
@media(max-width: 767px) {



.Menu-responsive{
    display: flex;
    padding-top: 2.7%;
    flex-direction: row;
}

.logo{
    float: right;
    
}

    .response-delete {
        width: 0;
        display: none;
    }

 .Three-points{
    left: 4%;
    top: 4.5%;
    position: absolute;
    width: 37px;
    height: 6px;
    border-radius: 20px;
    background: black;
    transition: 0.25s ease-in-out;
 }

 .Three-points::before{
    top: -12px;
    content: '';
    position: absolute;
    border-radius: 20px;
    width: 37px;
    height: 6px;
    background: black;
    transition: 0.5s;
 }

 .Three-points::after{
    top: 12px;
    content: '';
    position: absolute;
    border-radius: 20px;
    width: 37px;
    height: 6px;
    background: black;
    transition: 0.5s;
 }


    .list{
        display: flex;
        flex-direction: column;
        left: 1%;
        padding: 45px 0 0;
        color: white;
        flex-wrap: nowrap;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .list .listItens{
        padding: 0;
        list-style: none;
    }
    .list .listItens li{
        margin: 2px 8px;
        cursor: pointer;
    }
    .list .cadastro-item li{
        margin: 2px 8px;
        cursor: pointer;
    }
    
    .icon.iconActive .Three-points {
        background: transparent;
    }

    .icon.iconActive .Three-points::after {
        top: 0;
        background: #fff;
        transform: rotate(225deg);
    }

    .icon.iconActive .Three-points::before {
        top: 0;
        background: #fff;
        transform: rotate(135deg);
    }

    .menu.menuOpen {
        width: 150px;
        height: 100vh;
        background: #000;
        transition: 3s ease-in-out;

    }

    .menu.menuClose {
        display: none;
        width: 0px;
    }


}

`

export const Nav = styled.header`


padding-top: 29px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: auto;




@media(min-width: 768px) and (max-width: 1023px){
    width: 0%;
    display: none;
}

@media(max-width: 767px){
    width: 0%;
    display: none;
}


`