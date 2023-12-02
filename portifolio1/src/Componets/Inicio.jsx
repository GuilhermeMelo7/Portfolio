import React from "react";
import eu from "../assets/eu.jpg"
import insta from "../assets/insta.png"
import likedin from "../assets/likedin.png"
import github from "../assets/github.png"
import {SImg, SMain, SDiv, SSection, SNav, SDiv2, SDiv3, SDiv1, SH2, DivMob, Sp2, DivMob2, SImg2, SImg3} from "../Styles/InicioStyle"
function Inicio(){
    return(
        <SMain>
        <DivMob>
            <p>OLÁ! EU SOU O</p>
            <Sp2>GUILHERME!</Sp2>
        </DivMob>
         <SDiv>
            <DivMob2>
                <h2>Desenvolvedor Front-End & Web Designer</h2>
            </DivMob2>
            <SImg src={eu} alt="Foto de Guilherme" />
        </SDiv>   
        <SSection>
            <SH2>OLÁ! EU SOU O GUILHERME!</SH2>
            <SNav>
                <SDiv1>
                <a target="_blank" href="https://www.instagram.com/glhxrm/"><SImg2 src={insta} alt="Logo Instagram" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/guilherme-melo-392b471b7/"><SImg2 src={likedin} alt="Logo Likedin" /></a>
                <a target="_blank" href="https://github.com/GuilhermeMelo7"><SImg3 src={github} alt="Logo Github" /></a>
                </SDiv1>
                <SDiv2> <p>Desenvolvedor Front-End & Web Designer </p></SDiv2>
            </SNav>
        </SSection>
        </SMain>
    )
}

export default Inicio;