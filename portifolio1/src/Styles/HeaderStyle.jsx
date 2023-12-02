import styled from "styled-components";

export const SHeader = styled.header`
background-color: #1E1E1E;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 20vw;
padding-right: 5vw;
font-size: 1.3vw;
border-bottom: solid #292929 0.1vw;
color: white;
font-family: Inter;

@media (max-width:800px){
    flex-direction: column;
    justify-content: space-around;
    font-size: 2vw;
    width: 100vw;
    padding-right: 0;
    padding-left: 0;
    font-size: 4vw;
}
`
export const SUl = styled.ul`
display: flex;
list-style: none;
width: 20vw;
justify-content: space-around;
font-size: 1vw;
a{
    text-decoration: none;
    color: white;
    &:hover:hover{
    color: #8A8A8A;
    
    
}

}

@media (max-width:800px){
    font-size: 3.5vw;
    width: 80vw;
}

`

