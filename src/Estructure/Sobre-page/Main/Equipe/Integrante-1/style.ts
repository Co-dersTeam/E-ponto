import styled from "styled-components";


export const TeamMember = styled.div`

.Container-team {
    position: relative;
    width: 100%;

}

.team-member{
    display: block;
    margin-left: 16%;
    background-color: aqua;

    border-radius: 10px;
}

.text {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
opacity: 0;
transition: .5s ease;

background-color: white;
border-radius: 10px;
color: black;
padding-top: 6%;
font-size: 30px;
text-align: center;
position: absolute;
top: 13%;
left: 16%;
bottom: 13.1%;
right: 17.7%;

}

.Container-team:hover .text{
    opacity: 1;
}


.Title{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding-left: 16.5%;
    padding-bottom: 2%;
}

.Title-bottom{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-align: center;
    padding-top: 2%;

}

`