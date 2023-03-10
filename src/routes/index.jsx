import { useState } from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { Head } from "../ui/components/Head";
import { Menu } from "../ui/components/Menu";
import { Inicio } from "../ui/pages";


export const RoutesApp = () =>{
  
    return (
        <>
       
            {/* <Navbar data={compra}/> */}
            <Routes>
                <Route path="Inicio" element={<Inicio/>} />
                <Route path="/*" element={<Navigate to={"Inicio"}/> } />
            </Routes>
            
            <Head/>
            <Menu/>
        </>
    )
}