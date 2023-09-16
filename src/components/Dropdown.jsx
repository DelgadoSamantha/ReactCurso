import { useState } from "react"
import "./NavItem.css"
import {Icono} from "./icono";
import "./Dropdown.css";

export function Dropdown(){

const [open,setOpen]=useState(false);

    return (
    <div className="Nav-Item Dropdown" onClick={()=> setOpen((open)=>!open)}>
        <Icono icono={'menu'}></Icono>
        Más
        {open?<div className="Nav-Menu">Desplegable</div> :null}
    </div>
    );
}