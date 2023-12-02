import styled from "styled-components";

export const SImg = styled.img`
width: 20vw;
border-radius: 20px;
@media (max-width:800px){
    width: 60vw;
}
`

export const SMain = styled.main`
background-color:  #1E1E1E;
color: white;
display: flex;
height: 88vh;
font-size: 2vw;
font-family: Inter;
@media (max-width:800px){
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 95vh;
    align-items: center;
    padding-top: 7vw;
}
`
export const SH2 = styled.h2`
width: 23vw;
@media (max-width:800px){
    display: none;
}
`
export const Sp2 = styled.p`
`

export const SDiv = styled.div`
margin-left: 15vw;
padding-top: 6vw;

@media (max-width:800px){
    width: 100vw;
    padding-top: 0.5vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}
`
export const DivMob = styled.div`
display: none;
@media (max-width:800px){
    margin-top: 10vw;
    display: block;
    font-size: 5vw;
    width: 40vwvw;
    font-size: 7vw;
    font-family: Inter;
    margin-right: 3vw;
}
`

export const DivMob2 = styled.div`
display: none;
@media (max-width:800px){
    display: flex;
    color: #8A8A8A;
    font-size: 1.8vw;
    margin-bottom: 1vw;
}
`

export const SSection = styled.section`
padding-top: 6vw;
padding-left: 4vw;

@media (max-width:800px){
    padding-top: 1vw;
    padding-left:0vw;
    width: 100vw;
    display: flex;
    justify-content: center;
}
`
export const SNav = styled.nav`
display: flex;
`

export const SDiv1 = styled.div`

margin-top: 2vw;
display: flex;
flex-direction: column;
width: 4vw;
height: 24vh;
justify-content: space-around;
border-right: solid #8A8A8A 0.1vw;
@media (max-width:800px){
    flex-direction: initial;
    width: 40vw;
    margin-top: 13vw;
    height: 7vh;
    align-items: center;
    border-right: none;
    border-top: solid #8A8A8A 0.1vw;
}
`

export const SDiv2 = styled.div`
margin-top: 6.3vw;
margin-left: 3vw;
color: #8A8A8A;
font-size: 1.4vw;
@media (max-width:800px){
    display: none;
}
`
export const SDiv3 = styled.div`
margin-left: 40vw;
`

export const SImg2 = styled.img`
@media (max-width:800px){
margin-top: 1.3vw;
width: 7vw;
}
`
export const SImg3 = styled.img`
@media (max-width:800px){
width: 9.3vw;
}
`