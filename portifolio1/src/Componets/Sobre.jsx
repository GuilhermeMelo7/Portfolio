import React from "react";
import { SSectionS, SDivS, SDiv1S, SDiv2S, DivEstudos, DivEstudos2, DivEstudos3, DivEstudos4, EstacioImg, YesImg, EletronicaImg, DivHabilidades, HTMLImg, DivHabilidades2, CSSImg, JavaSImg, DivHabilidades3, DivHabilidades4, ReactImg, DivHabilidades5, StyledCImg, DivProfissional, DivProfissional2, PhotoshopImg, AtentoImg, Sp, DivEstudosGeral, VnWImg, DivHabilidasGeral, DivProfissionalGeral, Sh2 } from "../Styles/SobreStyle";
import vainaweb from "../assets/vainaweb.png"
import yesidiomas from "../assets/yesidiomas.png"
import eletronica from "../assets/eletronica.png"
import estacio from "../assets/estacio.png"
import html5 from "../assets/html5.png"
import css from "../assets/css.png"
import javas from "../assets/javas.png"
import reactlogo from "../assets/reactlogo.png"
import styledcomponents from "../assets/styledcomponents.png"
import atento from "../assets/atento.png"
import photoshop from "../assets/photoshop.png"


function Sobre(){
    return(
        <SSectionS>
            <SDivS>
                <Sh2>ESTUDOS</Sh2>
                 <DivEstudosGeral>
                <DivEstudos>
                <VnWImg src={vainaweb} alt="Logo Vnw" />
                <Sp>Desenvolvimento front-end</Sp>
                </DivEstudos>
                <DivEstudos2>
                 <YesImg src={yesidiomas} alt="Logo da Yes!" /> 
                 <Sp>Idiomas - Inglês Intermediário</Sp>  
                </DivEstudos2>
                <DivEstudos3>
                 <EletronicaImg src={eletronica} alt="Logo da Yes!" /> 
                 <Sp>Curso Técnico - Eletrônica</Sp>  
                </DivEstudos3>
                <DivEstudos4>
                    <EstacioImg src={estacio} alt="Logo da Estacio" />
                    <Sp>Graduação em Curso - Administração</Sp>
                </DivEstudos4>
                </DivEstudosGeral>
            </SDivS>
            <SDiv1S>
                <Sh2>HABILIDADES</Sh2>
                <DivHabilidasGeral>
                <DivHabilidades>
                    <HTMLImg src={html5} alt="Logo HTML" />
                    <Sp>Html 5</Sp>
                </DivHabilidades>
                <DivHabilidades2>
                    <CSSImg src={css} alt="Logo CSS" />
                    <Sp>CSS</Sp>
                </DivHabilidades2>
                <DivHabilidades3>
                    <JavaSImg src={javas} alt="Logo JS" />
                    <Sp>JavaScript</Sp>
                </DivHabilidades3>
                <DivHabilidades4>
                    <ReactImg src={reactlogo} alt="Logo React" />
                    <Sp>REACT</Sp>
                </DivHabilidades4>
                <DivHabilidades5>
                    <StyledCImg src={styledcomponents} alt="Logo StyledComponents" />
                    <Sp>styled components</Sp>
                </DivHabilidades5>
                </DivHabilidasGeral>
            </SDiv1S>
            <SDiv2S>
                <Sh2>PROFISSIONAL</Sh2>
                <DivProfissionalGeral>
                <DivProfissional>
                    <AtentoImg src={atento} alt="Logo Atento" />
                    <Sp>Analista em Relacionamento Digital</Sp>
                </DivProfissional>
                <DivProfissional2>
                    <PhotoshopImg src={photoshop} alt="Logo Ps" />
                    <Sp>Criador de Templates - Freelancer</Sp>
                </DivProfissional2>
                </DivProfissionalGeral>
            </SDiv2S>
        </SSectionS>
    )
}

export default Sobre;