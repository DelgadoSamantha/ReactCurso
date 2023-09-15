import { useState } from "react";
import { NavItem } from "./NavItem";
import { Dropdown } from "./Dropdown";
import "./Nav.css";

export function Nav() {
  const [menu, setMenu] = useState([
    { nombre: "Inicio", icono: "mdi-home" },
    { nombre: "Buscar", icono: "mdi-home" },
    { nombre: "Explorar", icono: "mdi-home" },
    { nombre: "Reels", icono: "mdi-home" },
    { nombre: "Mensajes", icono: "mdi-home" },
    { nombre: "Notificaciones", icono: "mdi-home" },
    { nombre: "Crear", icono: "mdi-home" },
    { nombre: "Perfil", icono: "mdi-home" }
  ]);

  return (
    <div className="Nav">
      Navigation
      {menu.map((elemento, i) => (
        <NavItem nombre={elemento.nombre} key={i}></NavItem>
      ))}
      <Dropdown></Dropdown>
    </div>
  );
}
