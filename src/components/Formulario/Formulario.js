import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor] = useState("")

  const { registrarColaborador, crearEquipo} = props

  const manejarEnvio = (e) => {
    e.preventDefault()
    const datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color});
  }

  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <Campo 
        titulo="Nombre" 
        placeholder="Ingresar nombre" 
        required 
        valor={nombre} 
        actualizarValor={actualizarNombre}>
      </Campo>
      <Campo 
        titulo="Puesto" 
        placeholder="Ingresar puesto" 
        required
        valor={puesto}
        actualizarValor={actualizarPuesto}>
      </Campo>
      <Campo 
        titulo="Foto" 
        placeholder="Ingresar enlace de foto" 
        required
        valor={foto}
        actualizarValor={actualizarFoto}>
      </Campo>
      <ListaOpciones
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}>
        </ListaOpciones>
      <Boton texto="Crear"></Boton>
    </form>

    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo.</h2>
      <Campo
        titulo="Titulo"
        placeholder="Ingresar titulo"
        required
        valor={titulo}
        actualizarValor={actualizarTitulo}>
      </Campo>
      <Campo
        titulo="Color"
        placeholder="Ingresar el color en hexadecimal"
        required
        valor={color}
        actualizarValor={actualizarColor}
        type="color">
      </Campo>
      <Boton texto="Registrar equipo"></Boton>
    </form>
  </section>
}

export default Formulario;