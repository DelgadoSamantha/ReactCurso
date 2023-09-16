import {Icono} from "./icono";
import "./NavItem.css";


export function NavItem(props){
    return <div className="Nav-Item">
    <Icono icono={props.icono}></Icono>
    {props.nombre}
    
        
    </div>
}