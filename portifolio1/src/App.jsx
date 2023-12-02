import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Componets/Header";
import Inicio from "./Componets/Inicio";
import Projetos from "./Componets/Projetos";
import Sobre from "./Componets/Sobre";
import {GlobalStyle} from "./Styles/global";

function App(){
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
       <Routes>
         <Route path="/" element={<Inicio/>}/>
         <Route path="/sobre" element={<Sobre/>}/>
         <Route path="/projetos" element={<Projetos/>}/> 
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;