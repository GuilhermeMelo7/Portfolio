import React  from "react";
import {SsectionP, SdivP, SdivH2, Ssection1, Ssection2, Sdiv1, Sdiv2, Sdiv3, Sdiv4, OutubroImg, CoffeeMobImg, CoffeePCImg, PetPCImg, PetMobImg, CalculadoraImg, DivTitulos, Sh2u, SSh2, Sa} from "../Styles/ProjetosStyle"
import outubrorosa from "../assets/outubrorosa.png"
import coffeepc from "../assets/coffeepc.png"
import coffeemob from "../assets/coffeemob.png"
import petpc from "../assets/petpc.png"
import petmob from "../assets/petmob.png"
import calculadora from "../assets/calculadora.png"

 
function Projetos(){
    return(
        <SsectionP>
            <SdivH2>
            <h2>PROJETOS</h2>
            </SdivH2>
        <SdivP>
            <Ssection1>
                <Sa target="_blank" href="https://projeto-coffee-nine.vercel.app/">
                <DivTitulos>
                    <SSh2>get.coffee</SSh2>
                <Sdiv1>
                    <CoffeePCImg src={coffeepc} alt="Projeto Coffee PC" />
                    <CoffeeMobImg src={coffeemob} alt="Projeto Coffee Mobile" />
                </Sdiv1>
                    <Sh2u>html, css</Sh2u>
                </DivTitulos>
                </Sa>
                <Sa target="_blank" href="https://desafio-final-modulo1-vnw.vercel.app/">
                <DivTitulos>
                    <SSh2>fantasika petshop</SSh2>
                <Sdiv2>
                <PetPCImg src={petpc} alt="Projeto Fantasika PC" />
                <PetMobImg src={petmob} alt="Projeto Fantasika Mobile" />
                </Sdiv2>
                <Sh2u>html, css</Sh2u>
                </DivTitulos>
                </Sa>
            </Ssection1>
            <Ssection2>
                <Sa target="_blank" href="https://outubro-rosa-projeto.vercel.app/">
            <DivTitulos>
                <SSh2>outubro rosa</SSh2>
                <Sdiv3>
                    <OutubroImg src={outubrorosa} alt="Projeto OutubroRosa" />
                </Sdiv3>
                <Sh2u>html, css, js, react</Sh2u>
                </DivTitulos>
                </Sa>
                <Sa href="https://calculadora-vn-w.vercel.app/" target="_blank">
                <DivTitulos>
                    <SSh2>Calculadora</SSh2>
                <Sdiv4><CalculadoraImg src={calculadora} alt="Projeto Calculadora" /></Sdiv4>
                <Sh2u>html, css, js, react</Sh2u>
                </DivTitulos>
                </Sa>
            </Ssection2>
        </SdivP>
        </SsectionP>
    )
}

export default Projetos;